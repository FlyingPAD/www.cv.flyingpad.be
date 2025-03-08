import { Component } from '@angular/core';
import { SpacerComponent } from '../../components/spacer/spacer.component';
import { IconSoftSkillsComponent } from "../../svg-icons/icon-soft-skills/icon-soft-skills.component";

@Component({
  selector: 'app-soft-skills',
  imports: [SpacerComponent, IconSoftSkillsComponent],
  templateUrl: './soft-skills.component.html',
  styleUrl: './soft-skills.component.scss'
})
export class SoftSkillsComponent {

}