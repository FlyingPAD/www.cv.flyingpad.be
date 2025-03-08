import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-soft-skills',
  imports: [],
  templateUrl: './icon-soft-skills.component.html'
})
export class IconSoftSkillsComponent {
  @Input() color: string = '#6b5240'
  @Input() size: string = '24px'
}