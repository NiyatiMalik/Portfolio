import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioMainComponent } from './components/portfolio-main/portfolio-main.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
{ path: '', component: PortfolioMainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent }
];
