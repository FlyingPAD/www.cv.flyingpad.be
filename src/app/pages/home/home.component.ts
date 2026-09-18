import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

type CreativeDomain = {
  index: string
  name: string
  detail: string
  tone: string
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly domains: CreativeDomain[] = [
    { index: '01', name: 'Ideas', detail: 'The starting point', tone: 'red' },
    { index: '02', name: 'Software', detail: 'Systems made tangible', tone: 'orange' },
    { index: '03', name: 'Music', detail: 'Composition & language', tone: 'yellow' },
    { index: '04', name: 'Audio', detail: 'Production & sound', tone: 'green' },
    { index: '05', name: 'Visual', detail: 'Image & motion', tone: 'blue' },
    { index: '06', name: 'Web', detail: 'Interfaces & experiences', tone: 'indigo' },
    { index: '07', name: 'Systems', detail: 'Architecture & abstraction', tone: 'violet' },
    { index: '08', name: 'Experiments', detail: 'Play, test, iterate', tone: 'black' }
  ]

  readonly journey = [
    { year: '2002', label: 'Visual Arts' },
    { year: '2009', label: 'Music / Audio' },
    { year: '2018', label: 'Web' },
    { year: '2022', label: 'Software' },
    { year: 'Now', label: 'Creative systems' }
  ]
}