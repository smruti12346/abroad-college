import { Component } from '@angular/core';

export interface data{
    name: string,
    tution_fee: {
      first: string,
      last: string
    },
    accomodation: {
      first: string,
      last: string
    },
    other_charges: {
      first: string,
      last: string
    },
    total: {
      first: string,
      last: string
    }
}
@Component({
  selector: 'app-mbbs-in-georgia',
  templateUrl: './mbbs-in-georgia.component.html',
  styleUrls: ['./mbbs-in-georgia.component.css']
})
export class MbbsInGeorgiaComponent {
   data:data[] =  [
    {
      name: "BATUMI SHOTA RUSTAVELI STATE UNIVERSITY",
      tution_fee: {
        first: "4000",
        last: "4000/yr"
      },
      accomodation: {
        first: "1200",
        last: "1200/yr"
      },
      other_charges: {
        first: "1800",
        last: "-"
      },
      total: {
        first: "7000",
        last: "20800"
      }
    },
    {
      name: "EAST EUROPEAN UNIVERSITY",
      tution_fee: {
        first: "5000",
        last: "5000/yr"
      },
      accomodation: {
        first: "1200",
        last: "1200/yr"
      },
      other_charges: {
        first: "1000",
        last: "-"
      },
      total: {
        first: "7200",
        last: "24800"
      }
    },
    {
      name: "PETRE SHOTADZE TBILISI MEDICAL ACADEMY",
      tution_fee: {
        first: "7000",
        last: "7000/yr"
      },
      accomodation: {
        first: "1200",
        last: "1200/yr"
      },
      other_charges: {
        first: "800",
        last: "-"
      },
      total: {
        first: "9000",
        last: "32800"
      }
    },
    {
      name: "NEW VISION UNIVERSITY",
      tution_fee: {
        first: "6500",
        last: "6500/yr"
      },
      accomodation: {
        first: "1200",
        last: "1200/yr"
      },
      other_charges: {
        first: "1300",
        last: "-"
      },
      total: {
        first: "9000",
        last: "30800"
      }
    }
   ]
}
