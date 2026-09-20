import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { SiteShellComponent } from '../../shared/site-shell/site-shell.component'

@Component({selector:'app-profile',standalone:true,imports:[SiteShellComponent,RouterLink],templateUrl:'./profile.component.html',styleUrl:'./profile.component.scss'})
export class ProfileComponent {
 readonly toolkit=[
  ['Backend & data','C# / .NET','ASP.NET Core','EF Core','REST APIs','SQL Server'],
  ['Front-end','Angular','TypeScript','RxJS','Signals','SCSS'],
  ['Architecture & delivery','Clean Architecture','DDD','CQS / CQRS','MediatR','GitHub Actions','Azure DevOps','CI / CD'],
  ['AI-assisted development','ChatGPT','GLM','Venice AI','Code generation','Review / refactoring'],
  ['AI media workflows','ComfyUI','SDXL','WAN','LoRA workflows','Image / video pipelines'],
  ['Audiovisual production','Adobe Premiere Pro','Cubase','Paint.NET','Sound design','Post-production']
 ]
}