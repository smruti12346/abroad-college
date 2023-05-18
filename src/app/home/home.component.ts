import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';

export interface countryInt {
  image: string;
  flag: string;
  title: string;
  link: string;
};

const countryData:countryInt[] = [
  {
     image: "russia_img.jpg",
     flag: "russia.png",
     title: "MBBS IN RUSSIA",
     link: "mbbs-in-russia"
  },
  {
    image: "georgia_img.jpg",
    flag: "georgia.png",
    title: "MBBS IN GEORGIA",
    link: "mbbs-in-georgia"
 },
 {
  image: "uzbekistan_img.jpg",
  flag: "uzbegistan.jpg",
  title: "MBBS IN UZBEKISTAN",
  link: "mbbs-in-uzbekistan"
},
{
  image: "kyrgyzstan_img.jpg",
  flag: "kyrgyzstan.png",
  title: "MBBS IN KYRGYZSTAN",
  link: "mbbs-in-kyrgyzstan"
},
{
  image: "kazakhstan_img.jpg",
  flag: "kazakhstan.png",
  title: "MBBS IN KAZAKHSTAN",
  link: "mbbs-in-kazakhstan"
}
]
export interface courseInt {
  title: string;
  image: string;
  slug: string
}
const courseData = [
  {
    title: "",
    image: "",
    slug: ""
  },
  {
    title: "",
    image: "",
    slug: ""
  },
  {
    title: "",
    image: "",
    slug: ""
  }
]
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
     country = countryData
     customOptions: OwlOptions = {
      loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 900,
    navText: ['<button type="button" role="presentation" class="owl-prev"><i class="ri-arrow-left-line"></i></button>', '<button type="button" role="presentation" class="owl-next"><i class="ri-arrow-right-line"></i></button>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
     }
     ngOnInit(){
      AOS.init({
        disable: function() {
            var maxWidth = 900;
            return window.innerWidth < maxWidth;
        }
      });
      AOS.refresh();
     }
    
}
