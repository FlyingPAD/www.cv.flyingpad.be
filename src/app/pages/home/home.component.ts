import { Component } from '@angular/core';
import { IconLinkedinComponent } from "../../svg-icons/icon-linkedin/icon-linkedin.component";
import { SpacerComponent } from "../../components/spacer/spacer.component";

@Component({
  selector: 'app-home',
  imports: [IconLinkedinComponent, SpacerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}