import { Component, HostListener, inject } from '@angular/core';
import { MenuService } from './services/menu.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  // - Properties :

  menuService = inject(MenuService)

  windowHeight : number = 0
  menuHeight :   number = 0
  topPosition :  number = 0
  pageHeight :   number = 15
  menuHalf :     number = 0     // If menu > window

  // - Methods :

  @HostListener('window:scroll', [])
  onScroll() 
  {
    this.windowHeight = window.innerHeight
    this.menuHeight = document.querySelector('#cv-menu-mobile')?.clientHeight || 0
    this.pageHeight = document.body.scrollHeight
    this.menuHalf = this.menuHeight - this.windowHeight

    console.log('-----------------------------------------')
    console.log(' - Page Height : ' + this.pageHeight)
    console.log(' - Menu Height : ' + this.menuHeight)
    console.log(' - Window Height : ' + this.windowHeight)
    console.log(' - Menu Top Position : ' + this.topPosition)
    console.log(' - Current Scroll Position : ' + window.scrollY)
    console.log(' - Menu Half : ' + this.menuHalf)

    // When scrolling Up :

    if(window.scrollY < this.topPosition - 75) 
    {
      if(window.scrollY <= 0 || window.scrollY < 50)
      {
        this.topPosition = 15
      }
      else this.topPosition = window.scrollY + 15
    }

    // When scrolling Down :

    if(this.menuHalf <= 0) // If Menu < Window
    {
      if(window.scrollY > this.topPosition + 150) // When Scrolling Down : 
      {
        if(window.scrollY > this.pageHeight - this.menuHeight )
        {
          this.topPosition = this.pageHeight - this.menuHeight - 15
        }
        else this.topPosition = window.scrollY + 15
      }
    }

    if(this.menuHalf > 0) // If Menu > Window
    { 
      if(window.scrollY > this.topPosition + this.menuHalf + 150) // When Scrolling Down : 
      {
        if(window.scrollY > this.pageHeight - this.menuHeight )
        {
          this.topPosition = this.pageHeight - this.menuHeight - 15
        }
        else this.topPosition = window.scrollY + 15
      }
    }
  }
}