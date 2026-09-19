import { Component } from '@angular/core'
import { SiteShellComponent } from '../../shared/site-shell/site-shell.component'

type Era={year:string;title:string;kind:string;body:string;detail:string[]}
@Component({selector:'app-journey',standalone:true,imports:[SiteShellComponent],templateUrl:'./journey.component.html',styleUrl:'./journey.component.scss'})
export class JourneyComponent {
 readonly eras:Era[]=[
  {year:'2002',title:'Visual Arts',kind:'Foundation',body:'The first language was visual: composition, form, contrast and the habit of turning an intention into something perceivable.',detail:['CESS · Visual Arts']},
  {year:'2009',title:'Music & Audio',kind:'Practice',body:'Creation became temporal and collaborative: composition, performance, teaching, recording, production and sound design.',detail:['Audio Manager · 2009–2015','Audio Producer · 2015–2022','Brandy Jingles · 2019–2020','Sound Design · 2017']},
  {year:'2018',title:'Web',kind:'Expansion',body:'Interfaces added interaction. Websites became another way to structure information, create an experience and ship work to an audience.',detail:['Freelance Webmaster · 2018–2022','SEO / SEA / SMM · 2019','Digital Coordinator · 2021']},
  {year:'2022',title:'Software',kind:'System',body:'Programming expanded the vocabulary again: abstraction, architecture, data, APIs and systems capable of carrying increasingly complex ideas.',detail:['IT Fundamentals · 2022','.NET / Azure · 2022','Full Stack Web · 2023','.NET Developer · 2023–2024','Satellit / Pluxee · 2024']},
  {year:'Now',title:'Creative Systems',kind:'Convergence',body:'The disciplines no longer sit in separate boxes. Software, music, image, video and interaction are materials selected according to what the idea needs.',detail:['FlyingPAD','Interactive systems','Audiovisual production','Creative-technical experimentation']}
 ]
}