import { Component, inject } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { CommonModule } from '@angular/common';
import { MenuToggleComponent } from '../menu-toggle/menu-toggle.component';
import { RouterModule } from '@angular/router';
import { IconHomeComponent } from 'src/app/svg-icons/icon-home/icon-home.component';
import { SpacerComponent } from "../spacer/spacer.component";
import { IconTrainingComponent } from 'src/app/svg-icons/icon-training/icon-training.component';
import { IconExperienceComponent } from 'src/app/svg-icons/icon-experience/icon-experience.component';
import { IconHardSkillsComponent } from 'src/app/svg-icons/icon-hard-skills/icon-hard-skills.component';
import { IconSoftSkillsComponent } from 'src/app/svg-icons/icon-soft-skills/icon-soft-skills.component';
import { IconProjectsComponent } from 'src/app/svg-icons/icon-projects/icon-projects.component';
import { IconResumeComponent } from 'src/app/svg-icons/icon-resume/icon-resume.component';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterModule, MenuToggleComponent, SpacerComponent,
    IconHomeComponent,
    IconTrainingComponent,
    IconExperienceComponent,
    IconHardSkillsComponent,
    IconSoftSkillsComponent,
    IconProjectsComponent,
    IconResumeComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  #menuService = inject(MenuService)

  public isMenuActive = this.#menuService.isMenuActive
  public isMobile = this.#menuService.isMobile

  public handleToggle(): void {
    if(this.isMobile()) {
      this.#menuService.toggleMenu()
    }
  }
}