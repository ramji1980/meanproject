import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,EmailValidator} from '@angular/forms';
import {CrudService} from './crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crudedit.component.html',
  providers:[CrudService]
})
export class CrudeditComponent implements OnInit {
  
  
  //crudList:Post[];
  crudForm:FormGroup;     
  status:any;
  error_message: any;  
  show_error: boolean = false;
  responseMessage: any;
  show_list: boolean = false;
  navPage: any;
  id:number;
  fName:string;
  lName:string;
  femail:any;
  fmobile:number;
  buttonname:string;
  
  errorMessage:any;
  constructor(fb:FormBuilder,private crudService:CrudService, private router: Router,
    private route: ActivatedRoute) { 
      let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
      let MobileRegex='[0-9]*';
    this.crudForm=fb.group({
        'firstName':['',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]],
        'lastName':['',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]],
        'empemail':['',[Validators.required,Validators.pattern(emailRegex)]],
        'mobile':['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(MobileRegex)]]
       
      })
  }
updateCrud(){ 
    var id = this.route.params.subscribe(params => {
      var id = params['id']; 
    });
    var userValue = this.crudForm.value;
   // console.log(userValue);
    var eid=this.id;
      this.crudService.updateCrud(userValue,eid).subscribe(data =>{
           this.responseMessage=data.message;
           if(data.code==200){
             this.show_error=false;
             this.status=data.message;
             this.router.navigate(['/crud/list']);
           } else {
             this.show_error=true;
           }
         },err=>{this.show_error=true;
       });
     } 
     ngOnInit() {
          var id = this.route.params.subscribe(params => {
          var id = params['id']; 
           
          if (!id)
            return;
            this.crudService.getCrud(id).subscribe(data => {    
                var res = data;                                          
                this.responseMessage = data.message;
                if (data) {
                  this.buttonname="Edit";
                  this.show_error = false;
                  this.id = res._id;
                  this.fName = res.firstName;                 
                  this.lName = res.lastName;
                  this.femail = res.empemail;
                  this.fmobile = res.mobile;      
                } else {
                  this.show_error = true;
                }
              },
              err => {
                console.log('ERR', err);
              });       
             
        }); // params braces ends here
      }

}
