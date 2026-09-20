import { DOCUMENT } from '@angular/common'
import { Component, effect, inject, Input, signal } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'app-site-shell',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './site-shell.component.html',
  styleUrl: './site-shell.component.scss'
})
export class SiteShellComponent {
  @Input() section = ''

  readonly menuOpen = signal(false)
  private readonly document = inject(DOCUMENT)
  private lockedScrollY = 0

  constructor() {
    effect(() => {
      if (this.menuOpen()) this.lockPageScroll()
      else this.unlockPageScroll()
    })
  }

  openMenu() {
    this.menuOpen.set(true)
  }

  closeMenu() {
    this.menuOpen.set(false)
  }

  private lockPageScroll() {
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

  private unlockPageScroll() {
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

  onOverlayKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') this.closeMenu()
  }
}
