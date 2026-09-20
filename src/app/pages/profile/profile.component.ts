import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { SiteShellComponent } from '../../shared/site-shell/site-shell.component'

@Component({selector:'app-profile',standalone:true,imports:[SiteShellComponent,RouterLink,TranslateModule],templateUrl:'./profile.component.html',styleUrl:'./profile.component.scss'})
export class ProfileComponent {
 readonly toolkit=[
  ['profile.toolkitGroups.backend','C# / .NET','ASP.NET Core','EF Core','REST APIs','SQL Server'],
  ['profile.toolkitGroups.frontend','Angular','TypeScript','RxJS','Signals','SCSS'],
  ['profile.toolkitGroups.architecture','Clean Architecture','DDD','CQS / CQRS','MediatR','GitHub Actions','Azure DevOps','CI / CD'],
  ['profile.toolkitGroups.aiDev','ChatGPT','GLM','Venice AI','Code generation','Review / refactoring'],
  ['profile.toolkitGroups.aiMedia','ComfyUI','SDXL','WAN','LoRA workflows','Image / video pipelines'],
  ['profile.toolkitGroups.av','Adobe Premiere Pro','Cubase','Paint.NET','Sound design','Post-production']
 ]
}
