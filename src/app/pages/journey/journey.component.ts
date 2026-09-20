import { Component } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'
import { SiteShellComponent } from '../../shared/site-shell/site-shell.component'

type Era={year:string;key:string;detailKeys:string[]}

@Component({selector:'app-journey',standalone:true,imports:[TranslateModule,SiteShellComponent],templateUrl:'./journey.component.html',styleUrl:'./journey.component.scss'})
export class JourneyComponent {
 readonly eras:Era[]=[
  {year:'2002',key:'visual',detailKeys:['journey.visual.details.0']},
  {year:'2009',key:'audio',detailKeys:['journey.audio.details.0','journey.audio.details.1','journey.audio.details.2','journey.audio.details.3']},
  {year:'2018',key:'web',detailKeys:['journey.web.details.0','journey.web.details.1','journey.web.details.2']},
  {year:'2022',key:'software',detailKeys:['journey.software.details.0','journey.software.details.1','journey.software.details.2','journey.software.details.3','journey.software.details.4']},
  {year:'Now',key:'systems',detailKeys:['journey.systems.details.0','journey.systems.details.1','journey.systems.details.2','journey.systems.details.3']}
 ]
}
