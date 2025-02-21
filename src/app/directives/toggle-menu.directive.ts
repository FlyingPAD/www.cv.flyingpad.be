import { Directive, HostListener, inject } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Directive({
  selector: '[appToggleMenu]'
})
export class ToggleMenuDirective {
  #menuService = inject(MenuService)

  @HostListener('click')
  onClick(): void {
    this.#menuService.toggleMenu()
  }
}