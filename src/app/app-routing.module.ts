import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeriStateMedicalCollegeComponent } from './college/meri-state-medical-college/meri-state-medical-college.component';

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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
