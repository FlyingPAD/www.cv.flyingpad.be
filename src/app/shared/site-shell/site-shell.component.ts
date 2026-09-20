import { DOCUMENT } from '@angular/common'
import { Component, effect, HostListener, inject, Input, OnDestroy, signal } from '@angular/core'
import { Router, RouterLink, RouterLinkActive } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { SiteLanguage, SiteLanguageService } from '../site-language.service'

@Component({
  selector: 'app-site-shell',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './site-shell.component.html',
  styleUrl: './site-shell.component.scss'
})
export class SiteShellComponent implements OnDestroy {
  @Input() section = ''

  readonly menuOpen = signal(false)
  readonly menuMounted = signal(false)
  readonly menuClosing = signal(false)
  readonly headerScrolled = signal(false)
  readonly showBackToTop = signal(false)

  readonly siteLanguage = inject(SiteLanguageService)
  readonly language = this.siteLanguage.language

  private readonly document = inject(DOCUMENT)
  private readonly router = inject(Router)
  private lockedScrollY = 0
  private closeTimer: number | null = null
  private restoreFocusElement: HTMLElement | null = null

  constructor() {
    effect(() => {
      if (this.menuMounted()) this.lockPageScroll()
      else this.unlockPageScroll()
    })
  }

  setLanguage(language: SiteLanguage): void {
    this.siteLanguage.setLanguage(language)
  }

  openMenu(): void {
    if (this.menuMounted()) return

    const active = this.document.activeElement
    this.restoreFocusElement = active instanceof HTMLElement ? active : null
    this.menuClosing.set(false)
    this.menuMounted.set(true)
    this.menuOpen.set(true)

    this.document.defaultView?.setTimeout(() => {
      this.document.querySelector<HTMLElement>('#mobile-menu .close-menu')?.focus()
    }, 0)
  }

  closeMenu(afterClose?: () => void): void {
    if (!this.menuMounted() || this.menuClosing()) return

    this.menuOpen.set(false)
    this.menuClosing.set(true)

    const view = this.document.defaultView
    const reduceMotion = view?.matchMedia('(prefers-reduced-motion: reduce)').matches ?? false
    const delay = reduceMotion ? 0 : 280

    if (this.closeTimer !== null && view) view.clearTimeout(this.closeTimer)

    const finish = () => {
      this.menuMounted.set(false)
      this.menuClosing.set(false)
      this.closeTimer = null
      this.restoreFocusElement?.focus()
      afterClose?.()
    }

    if (view) this.closeTimer = view.setTimeout(finish, delay)
    else finish()
  }

  navigateFromMenu(event: MouseEvent, path: string): void {
    event.preventDefault()
    this.closeMenu(() => void this.router.navigateByUrl(path))
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollY = this.document.defaultView?.scrollY ?? 0
    this.headerScrolled.set(scrollY > 12)
    this.showBackToTop.set(scrollY > 560)
  }

  scrollToTop(): void {
    const view = this.document.defaultView
    const reduceMotion = view?.matchMedia('(prefers-reduced-motion: reduce)').matches ?? false
    view?.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  onOverlayKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.preventDefault()
      this.closeMenu()
      return
    }

    if (event.key !== 'Tab') return

    const overlay = this.document.getElementById('mobile-menu')
    if (!overlay) return

    const focusable = Array.from(
      overlay.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
    ).filter(element => !element.hasAttribute('aria-hidden'))

    if (!focusable.length) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    const active = this.document.activeElement

    if (event.shiftKey && active === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && active === last) {
      event.preventDefault()
      first.focus()
    }
  }

  private lockPageScroll(): void {
    const body = this.document.body
    const root = this.document.documentElement
    const view = this.document.defaultView

    this.lockedScrollY = view?.scrollY ?? 0
    root.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    body.style.position = 'fixed'
    body.style.top = `-${this.lockedScrollY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'
  }

  private unlockPageScroll(): void {
    const body = this.document.body
    const root = this.document.documentElement
    const view = this.document.defaultView
    const wasLocked = body.style.position === 'fixed'

    root.style.overflow = ''
    body.style.overflow = ''
    body.style.position = ''
    body.style.top = ''
    body.style.left = ''
    body.style.right = ''
    body.style.width = ''

    if (wasLocked) view?.scrollTo({ top: this.lockedScrollY, behavior: 'instant' })
  }

  ngOnDestroy(): void {
    const view = this.document.defaultView
    if (this.closeTimer !== null && view) view.clearTimeout(this.closeTimer)
    this.unlockPageScroll()
  }
}
