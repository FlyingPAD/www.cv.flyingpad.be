import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-linkedin',
  imports: [],
  templateUrl: './icon-linkedin.component.html'
})
export class IconLinkedinComponent {
  @Input() color: string = '#6b5240'
  @Input() size: string = '24px'
}