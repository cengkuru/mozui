import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {OpenDataComponent} from "./open-data/open-data.component";
import {FaqsComponent} from "./faqs/faqs.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'open-data', component: OpenDataComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'faq', component: FaqsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
