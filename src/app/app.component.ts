import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuDesktopComponent } from './components/menu-desktop/menu-desktop.component';
import { MenuMobileComponent } from './components/menu-mobile/menu-mobile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuDesktopComponent, MenuMobileComponent],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}