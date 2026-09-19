import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { SiteShellComponent } from '../../shared/site-shell/site-shell.component'

type CreativeDomain = { index:string; name:string; detail:string; tone:string; href:string; external?:boolean }

@Component({selector:'app-home',imports:[RouterLink,SiteShellComponent],templateUrl:'./home.component.html',styleUrl:'./home.component.scss'})
export class HomeComponent {
 readonly domains:CreativeDomain[]=[
  {index:'02',name:'Ideas',detail:'The starting point',tone:'red',href:'/journey'},
  {index:'03',name:'Software',detail:'Systems made tangible',tone:'orange',href:'/profile'},
  {index:'04',name:'Music',detail:'Composition & language',tone:'yellow',href:'https://www.flyingpad.be',external:true},
  {index:'05',name:'Audio',detail:'Production & sound',tone:'green',href:'/journey'},
  {index:'06',name:'Visual',detail:'Image & motion',tone:'blue',href:'/journey'},
  {index:'07',name:'Web',detail:'Interfaces & experiences',tone:'indigo',href:'/work'},
  {index:'08',name:'Systems',detail:'Architecture & abstraction',tone:'violet',href:'/profile'},
  {index:'09',name:'Experiments',detail:'Play, test, iterate',tone:'black',href:'https://projects.flyingpad.be',external:true}
 ]
 readonly journey=[{year:'2002',label:'Visual Arts'},{year:'2009',label:'Music / Audio'},{year:'2018',label:'Web'},{year:'2022',label:'Software'},{year:'Now',label:'Creative systems'}]
}