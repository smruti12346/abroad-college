import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeriStateMedicalCollegeComponent } from './college/meri-state-medical-college/meri-state-medical-college.component';
import { CapsianUniversityComponent } from './college/capsian-university/capsian-university.component';
import { KazakhRussianMedicalUniversityComponent } from './college/kazakh-russian-medical-university/kazakh-russian-medical-university.component';
import { KokshetauStateUniversityComponent } from './college/kokshetau-state-university/kokshetau-state-university.component';
import{InternationalHigherSchoolOfMedicineComponent} from './college/international-higher-school-of-medicine/international-higher-school-of-medicine.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [{
    path: '',
    component: HomeComponent
},
{
  path: '',
  loadChildren: () => import('./pages/pages.module').then(m=>m.PagesModule) 
},
{
   path: 'mari-state-medical-university',
   component: MeriStateMedicalCollegeComponent
},
{
  path: 'capsian-university',
  component: CapsianUniversityComponent

},
{
  path: 'kazakh-university',
  component: KazakhRussianMedicalUniversityComponent 

},
{
  path: 'kokshetau-state-university',
  component: KokshetauStateUniversityComponent

},
{
  path: 'international-higher-school-of-medicine',
  component: InternationalHigherSchoolOfMedicineComponent

},
{
  path: '**',
  pathMatch: 'full',
  component: PageNotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
