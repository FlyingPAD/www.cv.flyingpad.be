import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperienceComponent } from './components/experience/experience.component';
import { HardSkillsComponent } from './components/hard-skills/hard-skills.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { TrainingComponent } from './components/training/training.component';

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