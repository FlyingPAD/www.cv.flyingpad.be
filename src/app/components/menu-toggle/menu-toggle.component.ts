import { Component, inject } from '@angular/core';
import { ToggleMenuDirective } from '../../directives/toggle-menu.directive';
import { IconHamburgerComponent } from "../../svg-icons/icon-hamburger/icon-hamburger.component";
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu-toggle',
  imports: [ToggleMenuDirective, IconHamburgerComponent],
  templateUrl: './menu-toggle.component.html',
  styleUrl: './menu-toggle.component.scss'
})
export class MenuToggleComponent {
  #menuService = inject(MenuService)

  public isMenuActive = this.#menuService.isMenuActive
}