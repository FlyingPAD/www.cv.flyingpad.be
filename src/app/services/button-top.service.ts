import { Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonTopService {
  #topButtonisActiveSubject = new BehaviorSubject<boolean>(false)

  public topButtonisActive = toSignal(this.#topButtonisActiveSubject) as Signal<boolean>

  public updateTopButtonState(state: boolean): void {
    this.#topButtonisActiveSubject.next(state)
  }
}