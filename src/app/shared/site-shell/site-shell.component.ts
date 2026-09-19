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

  constructor() {
    effect(() => {
      this.document.body.style.overflow = this.menuOpen() ? 'hidden' : ''
    })
  }

  openMenu() {
    this.menuOpen.set(true)
  }

  closeMenu() {
    this.menuOpen.set(false)
  }

  onOverlayKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') this.closeMenu()
  }
}
