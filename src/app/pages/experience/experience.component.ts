import { Component } from '@angular/core';
import { SpacerComponent } from '../../components/spacer/spacer.component';
import { IconExperienceComponent } from "../../svg-icons/icon-experience/icon-experience.component";

@Component({
  selector: 'app-experience',
  imports: [SpacerComponent, IconExperienceComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

}