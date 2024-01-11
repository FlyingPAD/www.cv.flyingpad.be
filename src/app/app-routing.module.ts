import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { HomeComponent } from './core/components/home/home.component';
import { ExperienceComponent } from './core/components/experience/experience.component';
import { HardSkillsComponent } from './core/components/hard-skills/hard-skills.component';
import { ProjectsComponent } from './core/components/projects/projects.component';
import { SoftSkillsComponent } from './core/components/soft-skills/soft-skills.component';
import { TrainingComponent } from './core/components/training/training.component';

const routes: Routes = 
[
  { path : '', redirectTo : 'home', pathMatch : 'full' },
  { path : 'home', component : HomeComponent },

  { path : 'training', component : TrainingComponent },
  { path : 'experience', component : ExperienceComponent },
  
  { path : 'hard-skills', component : HardSkillsComponent },
  { path : 'soft-skills', component : SoftSkillsComponent },

  { path : 'projects', component : ProjectsComponent },

  { path : 'not-found', component : NotFoundComponent },
  { path : '**', redirectTo : 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }