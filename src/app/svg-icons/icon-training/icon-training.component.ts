import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-training',
  imports: [],
  templateUrl: './icon-training.component.html'
})
export class IconTrainingComponent {
  @Input() color: string = '#6b5240'
  @Input() size: string = '24px'
}