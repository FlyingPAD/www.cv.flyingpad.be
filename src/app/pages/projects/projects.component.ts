import { Component } from '@angular/core';
import { SpacerComponent } from '../../components/spacer/spacer.component';
import { IconProjectsComponent } from "../../svg-icons/icon-projects/icon-projects.component";

@Component({
  selector: 'app-projects',
  imports: [SpacerComponent, IconProjectsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}