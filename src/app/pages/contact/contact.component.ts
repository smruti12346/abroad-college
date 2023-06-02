import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  btn_status:boolean = false
  message:string = ""
  error:string = ""
 contactForm = new FormGroup({
      your_name: new FormControl(),
      your_email: new FormControl(),
      your_subject: new FormControl(),
      your_message: new FormControl(),
      your_number: new FormControl()
  })
  constructor(private http: HttpClient, private route: Router, private fb: FormBuilder){
    
  }
 onSubmit(){
   let lead_type = this.route.url.replaceAll("-", " ").substr(1);
   this.message = ""
   this.error = ""
   this.btn_status = true
   let data = this.contactForm.value
   let formData = new FormData()
 
   formData.append("your-email", data.your_email)
   formData.append("your-name", data.your_name)
   formData.append("your-subject",data.your_subject)
   formData.append("your-message",data.your_message)
   formData.append("your-number",data.your_number)
   formData.append("lead-type",lead_type)
   this.http.post('https://www.thesisa.in/blog/wp-json/contact-form-7/v1/contact-forms/441/feedback',formData).subscribe((res:any)=>{
     this.btn_status = false
     if(res.status == "mail_sent"){
       this.message = res.message
     }else{
       this.error = res.message
     }        
   })
 } 
}
