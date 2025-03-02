import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-home',
  imports: [],
  templateUrl: './icon-home.component.html'
})
export class IconHomeComponent {
  @Input() color: string = '#6b5240'
  @Input() size: string = '24px'
}