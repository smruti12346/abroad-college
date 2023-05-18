import { Component } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-mbbs-in-russia',
  templateUrl: './mbbs-in-russia.component.html',
  styleUrls: ['./mbbs-in-russia.component.css']
})
export class MbbsInRussiaComponent {
    title = "MBBS IN RUSSIA"
    country:any
    constructor(public _countryService: CountryService){
          this.country = this._countryService.countryData
          console.log(this.country)
    }
}
