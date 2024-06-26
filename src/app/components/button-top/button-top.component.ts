import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-button-top',
  templateUrl: './button-top.component.html',
  styleUrls: ['./button-top.component.scss']
})
export class ButtonTopComponent 
{
  showButton = false

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() 
  {
    const threshold = 100
    const currentScrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
    this.showButton = currentScrollPosition > threshold
  }

  toTop() : void 
  {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}