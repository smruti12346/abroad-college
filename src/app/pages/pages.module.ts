import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MbbsInRussiaComponent } from './mbbs-in-russia/mbbs-in-russia.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MbbsInGeorgiaComponent } from './mbbs-in-georgia/mbbs-in-georgia.component';
import { MbbsInUzbekistanComponent } from './mbbs-in-uzbekistan/mbbs-in-uzbekistan.component';
import { MbbsInKyrgyzstanComponent } from './mbbs-in-kyrgyzstan/mbbs-in-kyrgyzstan.component';
import { MbbsInKazakhstanComponent } from './mbbs-in-kazakhstan/mbbs-in-kazakhstan.component';
import { PageUnderConstructionComponent } from '../components/page-under-construction/page-under-construction.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
@NgModule({
  declarations: [
    MbbsInRussiaComponent,
    ContactComponent,
    AboutComponent,
    MbbsInGeorgiaComponent,
    MbbsInUzbekistanComponent,
    MbbsInKyrgyzstanComponent,
    MbbsInKazakhstanComponent,
    PageUnderConstructionComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
