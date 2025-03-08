import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-hard-skills',
  imports: [],
  templateUrl: './icon-hard-skills.component.html'
})
export class IconHardSkillsComponent {
  @Input() color: string = '#6b5240'
  @Input() size: string = '24px'
}