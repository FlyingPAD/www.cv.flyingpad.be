import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { SiteShellComponent } from '../../shared/site-shell/site-shell.component'

@Component({selector:'app-profile',standalone:true,imports:[SiteShellComponent,RouterLink],templateUrl:'./profile.component.html',styleUrl:'./profile.component.scss'})
export class ProfileComponent {
 readonly toolkit=[
  ['Software','C# / .NET','ASP.NET Core','EF Core','MediatR','REST APIs'],
  ['Front-end','Angular','TypeScript','RxJS','Signals','SCSS','React'],
  ['Systems','Clean Architecture','CQS / CQRS','DDD concepts','CI / CD','GitHub Actions','Azure DevOps'],
  ['Creative','Music production','Sound design','Audiovisual','AI pipelines','Interactive design'],
  ['Additional','Node / Express','SQL Server','MySQL / MariaDB','PHP / Symfony','Python / Flask']
 ]
}