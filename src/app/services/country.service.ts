import { Injectable } from '@angular/core';
export interface countryInt {
  flag: string;
  title: string
};
const countryData:countryInt[] = [
  {
     flag: "russia.png",
     title: "MBBS IN RUSSIA"
  },
  {
    flag: "georgia.png",
    title: "MBBS IN GEORGIA"
 },
 {
  flag: "uzbegistan.jpg",
  title: "MBBS IN UZBEKISTAN"
},
{
  flag: "kyrgyzstan.png",
  title: "MBBS IN KYRGYZSTAN"
},
{
  flag: "kazakhstan.png",
  title: "MBBS IN KAZAKHSTAN"
}
]
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  countryData = countryData
  constructor() { }
}
