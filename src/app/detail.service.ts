import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './models/user.model';
import {Response} from './models/response.model'

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http: HttpClient) { }

  public getUsers(userId):Observable<User[]> {
    return this.http.get<Response>('https://reqres.in//api/users/'+ userId ).pipe(
      map( data => {
        //console.log(data);
        return new Response().deserialize(data).users;
      })
    );
  }
  

}
