import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HardSkillsComponent } from './components/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { TrainingComponent } from './components/training/training.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: 
  [
    HomeComponent,
    NotFoundComponent,
    ExperienceComponent,
    ProjectsComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    TrainingComponent,
  ],
  imports: 
  [
    CommonModule,
    RouterModule,
  ]
})
export class CoreModule { }
