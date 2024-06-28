import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HardSkillsComponent } from './pages/hard-skills/hard-skills.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SoftSkillsComponent } from './pages/soft-skills/soft-skills.component';
import { TrainingComponent } from './pages/training/training.component';
import { ButtonTopComponent } from './components/button-top/button-top.component';
import { MenuDesktopComponent } from './components/menu-desktop/menu-desktop.component';
import { MenuMobileComponent } from './components/menu-mobile/menu-mobile.component';

@NgModule({
  declarations: 
  [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    ProjectsComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    TrainingComponent,
    ButtonTopComponent,
    MenuDesktopComponent,
    MenuMobileComponent,
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
