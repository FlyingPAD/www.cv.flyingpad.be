import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-experience',
  imports: [],
  templateUrl: './icon-experience.component.html'
})
export class IconExperienceComponent {
  @Input() color: string = '#6b5240'
  @Input() size: string = '24px'
}