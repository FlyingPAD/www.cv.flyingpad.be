import { Component } from '@angular/core';
import { SpacerComponent } from '../../components/spacer/spacer.component';
import { IconHardSkillsComponent } from "../../svg-icons/icon-hard-skills/icon-hard-skills.component";

@Component({
  selector: 'app-hard-skills',
  imports: [SpacerComponent, IconHardSkillsComponent],
  templateUrl: './hard-skills.component.html',
  styleUrl: './hard-skills.component.scss'
})
export class HardSkillsComponent {

}
