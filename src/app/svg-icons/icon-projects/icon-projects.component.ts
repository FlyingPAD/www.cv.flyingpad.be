import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-projects',
  imports: [],
  templateUrl: './icon-projects.component.html'
})
export class IconProjectsComponent {
  @Input() color: string = '#6b5240'
  @Input() size: string = '24px'
}