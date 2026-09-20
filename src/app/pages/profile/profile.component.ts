import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { SiteShellComponent } from '../../shared/site-shell/site-shell.component'

@Component({selector:'app-profile',standalone:true,imports:[SiteShellComponent,RouterLink],templateUrl:'./profile.component.html',styleUrl:'./profile.component.scss'})
export class ProfileComponent {
 readonly toolkit=[
  ['Backend & data','C# / .NET','ASP.NET Core','EF Core','REST APIs','SQL Server'],
  ['Front-end','Angular','TypeScript','RxJS','Signals','SCSS'],
  ['Architecture','Clean Architecture','DDD','CQS / CQRS','MediatR'],
  ['Delivery','GitHub Actions','Azure DevOps','CI / CD','Git'],
  ['Creative systems','Music production','Sound design','Audiovisual','AI pipelines','Interactive design'],
  ['Additional','Node / Express','PHP / Symfony','Python / Flask','MySQL / MariaDB']
 ]
}