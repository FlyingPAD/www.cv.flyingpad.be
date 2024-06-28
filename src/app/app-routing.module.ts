import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperienceComponent } from './pages/experience/experience.component';
import { HardSkillsComponent } from './pages/hard-skills/hard-skills.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SoftSkillsComponent } from './pages/soft-skills/soft-skills.component';
import { TrainingComponent } from './pages/training/training.component';

const routes: Routes = 
[
  { path : '', redirectTo : 'home', pathMatch : 'full' },
  { path : 'home', component : HomeComponent, title : 'Tony\'s Resume' },
  
  { path : 'training', component : TrainingComponent, title : 'Training' },
  { path : 'experience', component : ExperienceComponent, title : 'Experience' },  
  { path : 'hard-skills', component : HardSkillsComponent, title : 'Hard-Skills' },
  { path : 'soft-skills', component : SoftSkillsComponent, title : 'Soft Skills' },
  { path : 'projects', component : ProjectsComponent, title : 'Projects' },

  { path : '**', redirectTo : 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }