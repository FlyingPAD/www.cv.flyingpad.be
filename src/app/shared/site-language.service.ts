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

    // Keep the original English experience unless the visitor explicitly chose a language.
    // This avoids unexpected browser-language switches and keeps layout changes intentional.
    this.setLanguage(this.readSavedLanguage() ?? 'en', false)
  }

  setLanguage(language: SiteLanguage, persist = true): void {
    this.language.set(language)
    this.translate.use(language)
    this.document.documentElement.lang = language

    if (!persist) return

    try {
      this.document.defaultView?.localStorage.setItem('cv-language', language)
    } catch {
      // Storage may be unavailable in private/restricted contexts.
    }
  }

  private readSavedLanguage(): SiteLanguage | null {
    try {
      const saved = this.document.defaultView?.localStorage.getItem('cv-language')
      return saved === 'fr' || saved === 'en' ? saved : null
    } catch {
      return null
    }
  }
}
