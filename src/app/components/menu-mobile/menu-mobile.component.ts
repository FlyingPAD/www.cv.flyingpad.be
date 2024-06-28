import { Component, HostListener, inject } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent {
  menuService = inject(MenuService)

  windowHeight: number = 0
  menuHeight: number = 0
  topPosition: number = 0
  pageHeight: number = 15

  // If menu > window
  menuHalf: number = 0

  @HostListener('window:scroll', [])
  onScroll() {
    this.windowHeight = window.innerHeight
    this.menuHeight = document.querySelector('#cv-menu-mobile')?.clientHeight || 0
    this.pageHeight = document.body.scrollHeight
    this.menuHalf = this.menuHeight - this.windowHeight

    // console.log('-----------------------------------------')
    // console.log(' - Page Height : ' + this.pageHeight)
    // console.log(' - Menu Height : ' + this.menuHeight)
    // console.log(' - Window Height : ' + this.windowHeight)
    // console.log(' - Menu Top Position : ' + this.topPosition)
    // console.log(' - Current Scroll Position : ' + window.scrollY)
    // console.log(' - Menu Half : ' + this.menuHalf)

    // When scrolling Up.

    if (window.scrollY < this.topPosition - 75) {
      if (window.scrollY <= 0 || window.scrollY < 50) {
        this.topPosition = 15
      }
      else this.topPosition = window.scrollY + 15
    }

    // When scrolling Down.

    // If Menu < Window
    if (this.menuHalf <= 0) {
      if (window.scrollY > this.topPosition + 150) {
        if (window.scrollY > this.pageHeight - this.menuHeight) {
          this.topPosition = this.pageHeight - this.menuHeight - 15
        }
        else this.topPosition = window.scrollY + 15
      }
    }

    // If Menu > Window
    if (this.menuHalf > 0) {
      if (window.scrollY > this.topPosition + this.menuHalf + 150) {
        if (window.scrollY > this.pageHeight - this.menuHeight) {
          this.topPosition = this.pageHeight - this.menuHeight - 15
        }
        else this.topPosition = window.scrollY + 15
      }
    }
  }
}
