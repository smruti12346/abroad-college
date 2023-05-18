import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MbbsInRussiaComponent } from './mbbs-in-russia/mbbs-in-russia.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MbbsInGeorgiaComponent } from './mbbs-in-georgia/mbbs-in-georgia.component';
import { MbbsInUzbekistanComponent } from './mbbs-in-uzbekistan/mbbs-in-uzbekistan.component';
import { MbbsInKyrgyzstanComponent } from './mbbs-in-kyrgyzstan/mbbs-in-kyrgyzstan.component';
import { MbbsInKazakhstanComponent } from './mbbs-in-kazakhstan/mbbs-in-kazakhstan.component';

const routes: Routes = [
  {
    path: 'mbbs-in-russia',
    component: MbbsInRussiaComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'mbbs-in-georgia',
    component: MbbsInGeorgiaComponent
  },
  {
    path: 'mbbs-in-uzbekistan',
    component: MbbsInUzbekistanComponent
  },
  {
    path: 'mbbs-in-kyrgyzstan',
    component: MbbsInKyrgyzstanComponent
  },
  {
    path: 'mbbs-in-kazakhstan',
    component: MbbsInKazakhstanComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
