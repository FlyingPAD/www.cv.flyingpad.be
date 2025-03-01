import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuIsActive: boolean = false
  menuTrigger() { this.menuIsActive = !this.menuIsActive }
}