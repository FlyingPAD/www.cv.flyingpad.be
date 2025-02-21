import { Component, inject } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overlay',
  imports: [CommonModule],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})
export class OverlayComponent {
  #menuService = inject(MenuService)

  public isMenuActive = this.#menuService.isMenuActive
  public isMobile = this.#menuService.isMobile

  public toggleMenu(): void {
    this.#menuService.toggleMenu()
  }
}