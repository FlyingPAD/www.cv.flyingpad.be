import { Component } from '@angular/core';
import { MenuToggleComponent } from '../menu-toggle/menu-toggle.component';

@Component({
  selector: 'app-header',
  imports: [MenuToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}