import { Component, inject, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { TranslateModule, TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  #translateService = inject(TranslateService)

  ngOnInit(): void {
    this.#translateService.addLangs(['en', 'fr'])
    this.#translateService.setDefaultLang('en')
    const rawBrowserLang = this.#translateService.getBrowserLang() ?? 'en'
    const browserLang = rawBrowserLang.match(/en|fr/) ? rawBrowserLang : 'en'
    this.#translateService.use(browserLang)
  }
}