import { Component, HostListener, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuService } from './services/menu.service';
import { MenuComponent } from "./components/menu/menu.component";
import { OverlayComponent } from "./components/overlay/overlay.component";
import { ButtonTopComponent } from "./components/button-top/button-top.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MenuComponent,
    OverlayComponent,
    ButtonTopComponent,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private readonly MOBILE_BREAKPOINT: number = 1300
  #menuService = inject(MenuService)
  #translateService = inject(TranslateService)

  public isMenuActive = this.#menuService.isMenuActive
  public isMobile = this.#menuService.isMobile

  ngOnInit(): void {
    this.handleResize(window.innerWidth)
    this.#translateService.addLangs(['en', 'fr'])
    this.#translateService.setDefaultLang('en')
    const rawBrowserLang = this.#translateService.getBrowserLang() ?? 'en'
    const browserLang = rawBrowserLang.match(/en|fr/) ? rawBrowserLang : 'en'
    this.#translateService.use(browserLang)
  }

  private handleResize(width: number): void {
    const isMobile = width < this.MOBILE_BREAKPOINT
    this.#menuService.setMobile(isMobile)
    isMobile ? this.#menuService.closeMenu() : this.#menuService.openMenu()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const width = (event.target as Window).innerWidth
    this.handleResize(width)
  }
}