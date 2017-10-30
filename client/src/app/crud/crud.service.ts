import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class CrudService {
    constructor(protected http:Http){}

    addCrud(crudval){
        var headers=new Headers();
        headers.append('content-Type','application/json');
        return this.http.post(
           "http://localhost:3000/api/crud/add",
           crudval,
           {headers:headers})
           .map(response=>response.json());      

    }
    updateCrud(request,eid){
        //console.log(request);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put("http://localhost:3000/api/crud/update_date/" + eid,
         JSON.stringify(request), {headers: headers}).map(res => res.json());
           

    }
 getCrud(id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get("http://localhost:3000/api/crud/get_data/" + id, {headers: headers}).map(res => res.json());
      }
     listCrud(filterArray) {
         //console.log("ram");
        //console.log(JSON.stringify(filterArray));
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/api/crud/list",
        JSON.stringify(filterArray),
        {headers:headers})
            .map(res => res.json());
      }

      deleteCrud(id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete("http://localhost:3000/api/crud/delete_data/" + id, {headers: headers}).map(res => res.json());
      }
}
