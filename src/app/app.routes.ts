import { Routes } from '@angular/router'
import { ExperienceComponent } from './pages/experience/experience.component'
import { HardSkillsComponent } from './pages/hard-skills/hard-skills.component'
import { HomeComponent } from './pages/home/home.component'
import { ProjectsComponent } from './pages/projects/projects.component'
import { SoftSkillsComponent } from './pages/soft-skills/soft-skills.component'
import { TrainingComponent } from './pages/training/training.component'
import { ResumeComponent } from './pages/resume/resume.component'

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Tony\'s Resume' },

  { path: 'training', component: TrainingComponent, title: 'Tony\'s Resume | Training' },
  { path: 'experience', component: ExperienceComponent, title: 'Tony\'s Resume | Experience' },
  { path: 'hard-skills', component: HardSkillsComponent, title: 'Tony\'s Resume | Hard-Skills' },
  { path: 'soft-skills', component: SoftSkillsComponent, title: 'Tony\'s Resume | Soft Skills' },
  { path: 'projects', component: ProjectsComponent, title: 'Tony\'s Resume | Projects' },
  { path: 'resume', component: ResumeComponent, title: 'Tony\'s Resume | Resume' },

  { path: '**', redirectTo: 'home' }
]