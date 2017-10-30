import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder} from '@angular/forms';
import {CrudService} from './crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crudlist.component.html',
  providers:[CrudService]
})
export class CrudlistComponent implements OnInit {
  
  //posts:Post[];
  crudList:Post[];
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
  id:number;
  firstName:string;
  lastName:string;
  empemail:any;
  mobile:number;
  
  errorMessage:any;
  
  constructor(fb:FormBuilder,private crudService:CrudService) { }

  deleteCrud(id) {    
    this.crudService.deleteCrud(id).subscribe(data => {
        this.responseMessage = data.message;
        if (data.code == 200) {
          this.listCrud({});
          this.show_error = false;
        } else {
          this.show_error = true;
        }
      },
      err => {
        console.log("ERR", err);
      });
  }

 listCrud(filterArray) {
   //console.log(filterArray);
  filterArray.index = this.index;
  filterArray.limit = this.limit;
  //this.crudList = [];
      this.crudService.listCrud(filterArray).subscribe(data => {
        this.crudList = data;       
        },
        err => {
          console.log('error list', err);
        });
 }

 searchList(index = 0) {
  // console.log("search list");
  setTimeout(()=>{
    var filters = [];
    var search = [];
  //  console.log("this.filterFirstName", this.filterFirstName);
    if (this.filterFirstName) {
     filters.push({
        "type": "FIXED",
        "key": "firstName",
        "value": [
          {
            "type": "IN",
            "value": this.filterFirstName
          }
        ]
      });
    }

    if (this.filterLastName) {
      filters.push({
        "type": "FIXED",
        "key": "lastName",
        "value": [
          {
            "type": "IN",
            "value": this.filterLastName
          }
        ]
      });
    }

    if (this.filterEmail) {
      filters.push({
        "type": "FIXED",
        "key": "empemail",
        "value": [
          {
            "type": "IN",
            "value": this.filterEmail
          }
        ]
      });
    }

    if (this.filterMobile) {
      filters.push({
        "type": "FIXED",
        "key": "mobile",
        "value": [
          {
            "type": "IN",
            "value": this.filterMobile
          }
        ]
      });
    }
   

    if (this.searchFirstName) {
      search.push({
        key: 'firstName',
        value: this.searchFirstName
      });
    }

    if (this.searchLastName) {
      search.push({
        key: 'lastName',
        value: this.searchLastName
      });
    }

    if (this.searchEmail) {
      search.push({
        key: 'empemail',
        value: this.searchEmail
      });
    }

    if (this.searchMobile) {
      search.push({
        key: 'mobile',
        value: this.searchMobile
      });
    }   
    this.index = index;
   // this.searchRequest = filters;
    this.searchRequest = search;
    console.log(this.searchRequest);
    this.listCrud(this.searchRequest)
  },500);


}

changePagination(value) {
  //console.log(value);
  if (value == 'previous') {
    this.index -= this.limit;
  } else {
    this.index += this.limit;
  }
  this.searchList(this.index)
}
 
  ngOnInit() {
    this.listCrud({});   
    //this.buttonname='Submit';
  }

}
interface Post{
  _id:number;
  firstName:string;
  lastName:string;
  empemail:any;
  mobile:number;
  
}