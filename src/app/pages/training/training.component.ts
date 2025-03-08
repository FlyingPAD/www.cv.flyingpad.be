import { Component } from '@angular/core';
import { SpacerComponent } from '../../components/spacer/spacer.component';
import { IconTrainingComponent } from "../../svg-icons/icon-training/icon-training.component";

@Component({
  selector: 'app-training',
  imports: [SpacerComponent, IconTrainingComponent],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent {

}