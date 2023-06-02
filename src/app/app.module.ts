import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { CapsianUniversityComponent } from './college/capsian-university/capsian-university.component';
import { KazakhRussianMedicalUniversityComponent } from './college/kazakh-russian-medical-university/kazakh-russian-medical-university.component';
import { KokshetauStateUniversityComponent } from './college/kokshetau-state-university/kokshetau-state-university.component';
import { InternationalHigherSchoolOfMedicineComponent } from './college/international-higher-school-of-medicine/international-higher-school-of-medicine.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MeriStateMedicalCollegeComponent } from './college/meri-state-medical-college/meri-state-medical-college.component';
import { SidebarComponent } from './college/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CapsianUniversityComponent,
    KazakhRussianMedicalUniversityComponent,
    KokshetauStateUniversityComponent,
    InternationalHigherSchoolOfMedicineComponent,
    FormComponent,
    MeriStateMedicalCollegeComponent,
    SidebarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
