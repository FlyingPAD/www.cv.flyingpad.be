import { Component } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'
import { SiteShellComponent } from '../../shared/site-shell/site-shell.component'

@Component({selector:'app-work',standalone:true,imports:[TranslateModule,SiteShellComponent],templateUrl:'./work.component.html',styleUrl:'./work.component.scss'})
export class WorkComponent {}
