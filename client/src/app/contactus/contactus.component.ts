import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,EmailValidator} from '@angular/forms';
import {ContactusService} from './contactus.services';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  providers:[ContactusService]
})
export class ContactusComponent implements OnInit {
 buttonname:string;
 contactname:string;
 contactemail:any;
 contactmessage:any;
 status:string;
 responseMessage:any;
 show_error:boolean=false;
 contactForm:FormGroup; 
  constructor(fb:FormBuilder,private contactusService:ContactusService) {
    let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
    this.contactForm=fb.group({
      contactname: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(25)]],
     // 'contactname':['',Validators.required],
      'contactemail':['',[Validators.required,Validators.pattern(emailRegex)]],
      'contactmessage':['',Validators.required]
    })
   }

   addContact(){
     // console.log('hi');
     /* var userValue={
        contactname:this.contactname,
        contactemail:this.contactemail,
        contactmessage:this.contactmessage
      }*/
     var userValue = this.contactForm.value;
        this.contactusService.addContactus(userValue).subscribe(data =>{
            this.responseMessage=data.message;
            if(data.code==200){
              this.show_error=false;
              this.status=data.message;
              this.contactForm.reset();
            } else {
              this.show_error=true;
            }
          },err=>{this.show_error=true;
        });
      }  

  ngOnInit() {
    this.buttonname="Submit";
  }

}
