import { DOCUMENT } from '@angular/common'
import { inject, Injectable, signal } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

export type SiteLanguage = 'en' | 'fr'

@Injectable({ providedIn: 'root' })
export class SiteLanguageService {
  private readonly document = inject(DOCUMENT)
  private readonly translate = inject(TranslateService)

  readonly language = signal<SiteLanguage>('en')

  constructor() {
    this.translate.addLangs(['en', 'fr'])
    this.translate.setDefaultLang('en')

    const storage = this.document.defaultView?.localStorage
    const saved = storage?.getItem('cv-language')
    const browser = this.translate.getBrowserLang()
    const initial: SiteLanguage = saved === 'fr' || saved === 'en'
      ? saved
      : browser === 'fr' ? 'fr' : 'en'

    this.setLanguage(initial)
  }

  setLanguage(language: SiteLanguage): void {
    this.language.set(language)
    this.translate.use(language)
    this.document.documentElement.lang = language
    this.document.defaultView?.localStorage.setItem('cv-language', language)
  }
}
