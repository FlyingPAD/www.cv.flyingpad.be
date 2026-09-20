import { DOCUMENT } from '@angular/common'
import { Component, computed, HostListener, inject, signal } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.scss'
})
export class BackToTopComponent {
  readonly visible = signal(false)
  readonly progress = signal(0)
  readonly progressAngle = computed(() => `${Math.round(this.progress() * 360)}deg`)

  private readonly document = inject(DOCUMENT)

  constructor() {
    this.updateScrollState()
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateScrollState()
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.updateScrollState()
  }

  scrollToTop(): void {
    const view = this.document.defaultView
    const reduceMotion = view?.matchMedia('(prefers-reduced-motion: reduce)').matches ?? false

    view?.scrollTo({
      top: 0,
      behavior: reduceMotion ? 'auto' : 'smooth'
    })
  }

  private updateScrollState(): void {
    const view = this.document.defaultView
    const root = this.document.documentElement
    const body = this.document.body
    const scrollY = view?.scrollY ?? root.scrollTop ?? 0
    const viewportHeight = view?.innerHeight ?? root.clientHeight
    const documentHeight = Math.max(root.scrollHeight, body.scrollHeight)
    const scrollable = Math.max(documentHeight - viewportHeight, 1)

    this.visible.set(scrollY > 520)
    this.progress.set(Math.min(1, Math.max(0, scrollY / scrollable)))
  }
}
