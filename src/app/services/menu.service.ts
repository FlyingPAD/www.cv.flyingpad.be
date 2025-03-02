// menu.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  #isMenuActive = new BehaviorSubject<boolean>(true)
  #isMobile = new BehaviorSubject<boolean>(false)

  public isMenuActive = toSignal(this.#isMenuActive)
  public isMobile = toSignal(this.#isMobile)

  public toggleMenu(): void {
    this.#isMenuActive.next(!this.#isMenuActive.value)
  }

  public closeMenu(): void {
    this.#isMenuActive.next(false)
  }

  public openMenu(): void {
    this.#isMenuActive.next(true)
  }

  public setMobile(isMobile: boolean): void {
    this.#isMobile.next(isMobile)
  }
}