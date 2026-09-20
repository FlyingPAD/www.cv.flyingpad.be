import { Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { SiteLanguageService } from './shared/site-language.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    inject(SiteLanguageService)
  }
}
