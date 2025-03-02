import { Component, inject } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { CommonModule } from '@angular/common';
import { MenuToggleComponent } from '../menu-toggle/menu-toggle.component';
import { IconHamburgerComponent } from "../../svg-icons/icon-hamburger/icon-hamburger.component";
import { RouterModule } from '@angular/router';
import { IconHomeComponent } from 'src/app/svg-icons/icon-home/icon-home.component';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterModule, MenuToggleComponent, 
    IconHamburgerComponent, IconHomeComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  #menuService = inject(MenuService)

  public isMenuActive = this.#menuService.isMenuActive
  public isMobile = this.#menuService.isMobile

  public handleToggle(): void {
    if(this.isMobile()) {
      this.#menuService.toggleMenu()
    }
  }
}