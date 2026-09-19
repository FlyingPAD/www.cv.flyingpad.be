import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { WorkComponent } from './pages/work/work.component'
import { JourneyComponent } from './pages/journey/journey.component'
import { ProfileComponent } from './pages/profile/profile.component'
import { ResumeComponent } from './pages/resume/resume.component'

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Tony Van Langenhove' },
  { path: 'work', component: WorkComponent, title: 'Tony Van Langenhove | Work' },
  { path: 'journey', component: JourneyComponent, title: 'Tony Van Langenhove | Journey' },
  { path: 'profile', component: ProfileComponent, title: 'Tony Van Langenhove | Profile' },
  { path: 'resume', component: ResumeComponent, title: 'Tony Van Langenhove | Resume' },
  { path: 'projects', redirectTo: 'work' },
  { path: 'experience', redirectTo: 'journey' },
  { path: 'training', redirectTo: 'journey' },
  { path: 'hard-skills', redirectTo: 'profile' },
  { path: 'soft-skills', redirectTo: 'profile' },
  { path: '**', redirectTo: 'home' }
]