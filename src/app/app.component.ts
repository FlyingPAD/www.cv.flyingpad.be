import { Component, HostListener, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuService } from './services/menu.service';
import { MenuComponent } from "./components/menu/menu.component";
import { MenuToggleComponent } from "./components/menu-toggle/menu-toggle.component";
import { OverlayComponent } from "./components/overlay/overlay.component";
import { ButtonTopComponent } from "./components/button-top/button-top.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
    MenuToggleComponent,
    OverlayComponent,
    ButtonTopComponent,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private readonly MOBILE_BREAKPOINT: number = 1024;
  #menuService = inject(MenuService);
  #translateService = inject(TranslateService);

  ngOnInit(): void {
    this.handleResize(window.innerWidth);
    this.#translateService.addLangs(['en', 'fr']);
    this.#translateService.setDefaultLang('en');
    const rawBrowserLang = this.#translateService.getBrowserLang() ?? 'en';
    const browserLang = rawBrowserLang.match(/en|fr/) ? rawBrowserLang : 'en';
    this.#translateService.use(browserLang);
  }

  private handleResize(width: number): void {
    const isMobile = width < this.MOBILE_BREAKPOINT;
    this.#menuService.setMobile(isMobile);
    isMobile ? this.#menuService.closeMenu() : this.#menuService.openMenu();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const width = (event.target as Window).innerWidth;
    this.handleResize(width);
  }
}