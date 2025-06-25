import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PortfolioMainComponent } from './components/portfolio-main/portfolio-main.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { OtherInterestsComponent } from './components/other-interests/other-interests.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
{ path: '', component: PortfolioMainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'other-interests', component: OtherInterestsComponent },
  { path: 'footer', component: FooterComponent }
];
