import { Component, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { SiteLanguageService } from '../../shared/site-language.service'
import { SiteShellComponent } from '../../shared/site-shell/site-shell.component'

type CreativeDomain = { index:string; nameKey:string; detailKey:string; tone:string; href:string; external?:boolean }

@Component({selector:'app-home',imports:[RouterLink,TranslateModule,SiteShellComponent],templateUrl:'./home.component.html',styleUrl:'./home.component.scss'})
export class HomeComponent {
 readonly language = inject(SiteLanguageService).language

 readonly domains:CreativeDomain[]=[
  {index:'02',nameKey:'home.domains.ideas.name',detailKey:'home.domains.ideas.detail',tone:'red',href:'/journey'},
  {index:'03',nameKey:'home.domains.software.name',detailKey:'home.domains.software.detail',tone:'orange',href:'/profile'},
  {index:'04',nameKey:'home.domains.music.name',detailKey:'home.domains.music.detail',tone:'yellow',href:'https://www.flyingpad.be',external:true},
  {index:'05',nameKey:'home.domains.audio.name',detailKey:'home.domains.audio.detail',tone:'green',href:'/journey'},
  {index:'06',nameKey:'home.domains.visual.name',detailKey:'home.domains.visual.detail',tone:'blue',href:'/journey'},
  {index:'07',nameKey:'home.domains.web.name',detailKey:'home.domains.web.detail',tone:'indigo',href:'/work'},
  {index:'08',nameKey:'home.domains.systems.name',detailKey:'home.domains.systems.detail',tone:'violet',href:'/profile'},
  {index:'09',nameKey:'home.domains.experiments.name',detailKey:'home.domains.experiments.detail',tone:'black',href:'https://projects.flyingpad.be',external:true}
 ]

 readonly journey=[
  {year:'2002',labelKey:'home.journeyLabels.visual'},
  {year:'2009',labelKey:'home.journeyLabels.audio'},
  {year:'2018',labelKey:'home.journeyLabels.web'},
  {year:'2022',labelKey:'home.journeyLabels.software'},
  {year:'Now',labelKey:'home.journeyLabels.systems'}
 ]
}
