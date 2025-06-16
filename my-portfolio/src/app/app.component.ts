import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioMainComponent } from './components/portfolio-main/portfolio-main.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, ProjectsComponent, ContactComponent, PortfolioMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';
}
