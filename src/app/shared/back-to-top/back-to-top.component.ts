import { DOCUMENT } from '@angular/common'
import { Component, HostListener, inject, signal } from '@angular/core'
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

  private readonly document = inject(DOCUMENT)

  constructor() {
    this.updateVisibility()
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateVisibility()
  }

  scrollToTop(): void {
    const view = this.document.defaultView
    const reduceMotion = view?.matchMedia('(prefers-reduced-motion: reduce)').matches ?? false

    view?.scrollTo({
      top: 0,
      behavior: reduceMotion ? 'auto' : 'smooth'
    })
  }

  private updateVisibility(): void {
    const scrollY = this.document.defaultView?.scrollY ?? 0
    this.visible.set(scrollY > 560)
  }
}
