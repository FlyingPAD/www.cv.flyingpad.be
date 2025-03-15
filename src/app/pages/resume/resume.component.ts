import { Component, inject } from '@angular/core';
import { SpacerComponent } from '../../components/spacer/spacer.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { IconResumeComponent } from "../../svg-icons/icon-resume/icon-resume.component";

@Component({
  selector: 'app-resume',
  imports: [SpacerComponent, TranslatePipe, IconResumeComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  #translateService = inject(TranslateService)

  public switchLanguage(lang: string): void {
    this.#translateService.use(lang)
  }
  public get currentLanguage(): string {
    return this.#translateService.currentLang
  }
}