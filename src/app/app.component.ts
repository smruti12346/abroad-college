import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { environment } from 'src/environments/environment';
import {doc, setDoc,getDocs, collection, query,where} from "firebase/firestore"
import { Router, NavigationEnd  } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'College';
  app = initializeApp(environment.firebaseConfig)
  db = getFirestore(this.app)
  //docRef = doc(this.db, "cities");
  citiesRef = collection(this.db, "cities");
  constructor(private router: Router){
    //this.db
     //this.citiesRef.add({})
    //  setDoc(doc(this.citiesRef), {
    //   name: "San Francisco", state: "CA", country: "USA",
    //   capital: false, population: 860000,
    //   regions: ["west_coast", "norcal"] });

    //   setDoc(doc(this.citiesRef, "LA"), {
    //     name: "Los Angeles", state: "CA", country: "USA",
    //     capital: false, population: 3900000,
    //     regions: ["west_coast", "socal"] });
    //   setDoc(doc(this.citiesRef, "DC"), {
    //     name: "Washington, D.C.", state: null, country: "USA",
    //     capital: true, population: 680000,
    //     regions: ["east_coast"] });
    //   setDoc(doc(this.citiesRef, "TOK"), {
    //     name: "Tokyo", state: null, country: "Japan",
    //     capital: true, population: 9000000,
    //     regions: ["kanto", "honshu"] });
    //   setDoc(doc(this.citiesRef, "BJ"), {
    //     name: "Beijing", state: null, country: "China",
    //     capital: true, population: 21500000,
    //     regions: ["jingjinji", "hebei"] });
    //     const q = query(this.citiesRef, where("state", "==", "CA"));
    //     //console.log(q.firestore.app);
    //     let querySnap = getDocs(q)
    //     querySnap.then((data)=>{
    //         data.forEach((deta)=>{
    //             console.log(deta.data())
    //         })
    //     })
        
      // let docSnap = getDoc(this.docRef);
      // let docc = doc(this.db, 'users',"new");
      // let collec = getDoc(doc(this.db, 'users', "new"))
      // docSnap.then((data)=>{
      //      console.log(data.data())
      // })
      // setDoc(doc(this.db, "users", "new"),{
      //    "name" : "mru nayakk",
      //    "age": 48,
      //    "city": "bbsr",
      //    "details": {
      //       'lat': 41,
      //       'long': 59
      //    }
      // })
      
  }
  ngOnInit() {
    this.router.events.subscribe((event) => {
        if (!(event instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
}
  

}
