import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-hamburger',
  imports: [],
  templateUrl: './icon-hamburger.component.html'
})
export class IconHamburgerComponent {
  @Input() color: string = '#6b5240'
  @Input() size: string = '24px'
}