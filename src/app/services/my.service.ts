import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private http : HttpClient) { }

  getUser() : Observable<any>{
    return this.http.get("http://reqres.in/api/user/1");
  }

  getUsers()  : Observable<any>{
    return this.http.get("https://reqres123.in/api/users");
  }

  getAlbum() : Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/albums/1")
  }
}
