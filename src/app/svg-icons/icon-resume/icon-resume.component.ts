import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-resume',
  imports: [],
  templateUrl: './icon-resume.component.html'
})
export class IconResumeComponent {
  @Input() color: string = '#6b5240'
  @Input() size: string = '24px'
}