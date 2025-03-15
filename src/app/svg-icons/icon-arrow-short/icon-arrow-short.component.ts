import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-arrow-short',
  templateUrl: './icon-arrow-short.component.html'
})
export class IconArrowShortComponent {

  @Input() color: string = '#6b5240'
  @Input() size: string = '24px'
  @Input() direction: string = 'down'

  public getTransform(): string {
    const centerX = 600;
    const centerY = 600;
    switch (this.direction) {
      case 'up':
        return `rotate(0 ${centerX} ${centerY})`
      case 'up-right':
        return `rotate(315 ${centerX} ${centerY})`
      case 'right':
        return `rotate(270 ${centerX} ${centerY})`
      case 'down-right':
        return `rotate(225 ${centerX} ${centerY})`
      case 'down':
        return `rotate(180 ${centerX} ${centerY})`
      case 'down-left':
        return `rotate(135 ${centerX} ${centerY})`
      case 'left':
        return `rotate(90 ${centerX} ${centerY})`
      case 'up-left':
        return `rotate(45 ${centerX} ${centerY})`
      // Par défaut : 'UP'
      default:
        return `rotate(0 ${centerX} ${centerY})`
    }
  }
}