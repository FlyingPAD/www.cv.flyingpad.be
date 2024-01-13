import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HardSkillsComponent } from './components/hard-skills/hard-skills.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { TrainingComponent } from './components/training/training.component';

@NgModule({
  declarations: 
  [
    AppComponent,
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
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
