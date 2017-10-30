import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ContactusService {
    constructor(protected http:Http){ }
    addContactus(contact){
        //console.log( JSON.stringify(contact));
        var headers=new Headers();
        headers.append('content-Type','application/json');
      //  headers.append('Content-Type','application/x-www-form-urlencoded');
        return this.http.post(
            "http://localhost:3000/api/contactus/add",
            //JSON.stringify(contact),
            contact,
            {headers:headers})
            .map(response=>response.json());
    }
}
