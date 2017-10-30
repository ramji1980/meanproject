import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,EmailValidator} from '@angular/forms';
import {CrudService} from './crud.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
  providers:[CrudService]
})
export class CrudComponent implements OnInit {
  buttonname:string;
  firstName:string;
  lastName:string;
  empemail:any;
  mobile:number;
  crudList:any;
  crudForm:FormGroup;     
  status:any;
  error_message: any;  
  show_error: boolean = false;
  responseMessage: any;
  show_list: boolean = false;
  navPage: any;

  searchRequest: any;
  searchFirstName: any = null;
  searchLastName: any = null;
  searchEmail: any = null;
  searchMobile: any = null;
  
  filterFirstName: any = null;
  filterLastName: any = null;
  filterMobile: any = null;
  filterEmail: any = null;
  
  isFirst: boolean = false;
  isLast: boolean = false;
  index: number = 0;
  limit: number = 2;
  constructor(fb:FormBuilder,private crudService:CrudService,private router:Router) { 
    let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
    this.crudForm=fb.group({
      'firstName':['',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]],
      'lastName':['',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]],
      'empemail':['',[Validators.required,Validators.pattern(emailRegex)]],
      'mobile':['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    })
  }

  addCrud(){
    
    var userValue = this.crudForm.value;
       this.crudService.addCrud(userValue).subscribe(data =>{
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
   // this.listCrud({});
    //this.navPage.list = true;
    this.buttonname='Add';
  }

}
