import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioMainComponent } from './components/portfolio-main/portfolio-main.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { OtherInterestsComponent } from './components/other-interests/other-interests.component';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, ProjectsComponent, PortfolioMainComponent, OtherInterestsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';
}
