import { Component, inject, signal } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { SiteShellComponent } from '../../shared/site-shell/site-shell.component'

type ResumeLanguage = 'en' | 'fr'
type ResumeMode = 'design' | 'essential'
type LocalizedText = Record<ResumeLanguage, string>

type ResumeExperience = {
  period: string
  role: LocalizedText
  company: string
  context?: LocalizedText
  detail: LocalizedText
}

type ResumeEducation = {
  period: string
  title: LocalizedText
  place: string
}

type ResumeToolGroup = {
  title: LocalizedText
  items: string[]
}

const COPY = {
  en: {
    document: 'Professional résumé',
    design: 'Design',
    essential: 'Essential',
    print: 'Print / PDF',
    identity: '.NET / Angular Developer · Creative Systems',
    location: 'Mons · Belgium',
    summaryLabel: 'Profile',
    summary: 'Full-stack .NET / Angular developer with a multidisciplinary background in software, web, audio and visual production. I build maintainable products with a strong focus on structure, clarity and the user experience.',
    experience: 'Experience',
    education: 'Education & training',
    toolkit: 'Toolkit',
    languages: 'Languages',
    contact: 'Contact',
    selected: 'Selected professional path',
    printHint: 'A4 · live HTML document',
    licence: 'Driving licence B',
    languageLevels: ['French · C2', 'English · B2+', 'Dutch / Flemish · B2'],
    footer: 'cv.flyingpad.be · 2026'
  },
  fr: {
    document: 'Curriculum vitæ',
    design: 'Design',
    essential: 'Essentiel',
    print: 'Imprimer / PDF',
    identity: 'Développeur .NET / Angular · Systèmes créatifs',
    location: 'Mons · Belgique',
    summaryLabel: 'Profil',
    summary: 'Développeur full-stack .NET / Angular au parcours multidisciplinaire mêlant logiciel, web, audio et production visuelle. Je conçois des produits maintenables avec une attention particulière portée à la structure, la clarté et l’expérience utilisateur.',
    experience: 'Expérience',
    education: 'Formation',
    toolkit: 'Compétences',
    languages: 'Langues',
    contact: 'Contact',
    selected: 'Parcours professionnel sélectionné',
    printHint: 'A4 · document HTML dynamique',
    licence: 'Permis de conduire B',
    languageLevels: ['Français · C2', 'Anglais · B2+', 'Néerlandais / Flamand · B2'],
    footer: 'cv.flyingpad.be · 2026'
  }
} as const

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [SiteShellComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  private readonly translate = inject(TranslateService)

  readonly language = signal<ResumeLanguage>(this.translate.currentLang === 'fr' ? 'fr' : 'en')
  readonly mode = signal<ResumeMode>('design')

  readonly experience: ResumeExperience[] = [
    {
      period: '2024',
      role: { en: '.NET Developer', fr: 'Développeur .NET' },
      company: 'Satellit · Pluxee Support Team',
      detail: {
        en: 'Frontend forms, backend data processing, API integration, Azure services and CI/CD.',
        fr: 'Formulaires frontend, traitement backend des données, intégration API, services Azure et CI/CD.'
      }
    },
    {
      period: '2019—2020',
      role: { en: 'Audio Producer', fr: 'Producteur audio' },
      company: 'Brandy Jingles',
      detail: {
        en: 'Studio sessions, broadcast production and post-production, planning and client coordination.',
        fr: 'Sessions studio, production et post-production broadcast, planification et coordination client.'
      }
    },
    {
      period: '2018—2022',
      role: { en: 'Webmaster', fr: 'Webmaster' },
      company: 'Freelance · Various clients',
      detail: {
        en: 'Hosting, CMS installation, administration, maintenance and technical support.',
        fr: 'Hébergement, installation de CMS, administration, maintenance et support technique.'
      }
    },
    {
      period: '2015—2022',
      role: { en: 'Audio Producer', fr: 'Producteur audio' },
      company: 'Freelance · Flying PAD',
      detail: {
        en: 'Prospecting, recording, editing, mixing, mastering, delivery and after-sales support.',
        fr: 'Prospection, enregistrement, édition, mixage, mastering, livraison et suivi après-vente.'
      }
    },
    {
      period: '2009—2015',
      role: { en: 'Audio Manager', fr: 'Responsable audio' },
      company: 'Freelance · Various clients',
      detail: {
        en: 'Stage management, composition, performance and music teaching.',
        fr: 'Régie, composition, performance et enseignement musical.'
      }
    }
  ]

  readonly education: ResumeEducation[] = [
    {
      period: '2023—2024',
      title: { en: '.NET Developer · Professional training', fr: 'Développeur .NET · Formation professionnelle' },
      place: 'Satellit'
    },
    {
      period: '2023',
      title: { en: 'Web Developer · Full Stack', fr: 'Développeur Web · Full Stack' },
      place: 'Technofutur TIC'
    },
    {
      period: '2022',
      title: { en: '.NET Azure + IT Fundamentals', fr: '.NET Azure + Fondements IT' },
      place: 'Technofutur TIC'
    },
    {
      period: '2021',
      title: { en: 'Digital Coordinator / E-Commerce', fr: 'Coordinateur digital / E-Commerce' },
      place: 'Google Digital Atelier'
    },
    {
      period: '2019',
      title: { en: 'SEO · SEA · SMM', fr: 'SEO · SEA · SMM' },
      place: 'Technofutur TIC'
    },
    {
      period: '2017',
      title: { en: 'Sound Design', fr: 'Sound Design' },
      place: 'Technocité'
    },
    {
      period: '2002',
      title: { en: 'CESS · Visual Arts', fr: 'CESS · Arts visuels' },
      place: 'Institut Ste-Marie'
    }
  ]

  readonly toolkit: ResumeToolGroup[] = [
    {
      title: { en: 'Backend', fr: 'Backend' },
      items: ['C# / .NET', 'ASP.NET Core', 'EF Core', 'MediatR', 'REST APIs']
    },
    {
      title: { en: 'Frontend', fr: 'Frontend' },
      items: ['Angular', 'TypeScript', 'RxJS', 'Signals', 'SCSS', 'React']
    },
    {
      title: { en: 'Architecture', fr: 'Architecture' },
      items: ['Clean Architecture', 'CQS / CQRS', 'DDD concepts', 'GitHub Actions', 'Azure DevOps']
    },
    {
      title: { en: 'Data & additional', fr: 'Données & complémentaire' },
      items: ['SQL Server', 'MySQL / MariaDB', 'Node / Express', 'PHP / Symfony', 'Python / Flask']
    },
    {
      title: { en: 'Creative', fr: 'Créatif' },
      items: ['Music production', 'Sound design', 'Audiovisual', 'AI pipelines', 'Interactive design']
    }
  ]

  get copy() {
    return COPY[this.language()]
  }

  text(value: LocalizedText): string {
    return value[this.language()]
  }

  switchLanguage(language: ResumeLanguage): void {
    this.language.set(language)
    this.translate.use(language)
  }

  switchMode(mode: ResumeMode): void {
    this.mode.set(mode)
  }

  printResume(): void {
    window.print()
  }
}
