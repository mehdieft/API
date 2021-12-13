import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {User} from '../interfaces/user';
import {ReplaySubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  baseUrl='https://localhost:5001/api';
  private curentUserSource= new ReplaySubject<User>(1);
  currentUser$=this.curentUserSource.asObservable();

  constructor(private http:HttpClient) { }
  register(model:any){
    return this.http.post(this.baseUrl+'/account/register',model)
  };
  login(model:any){
    return this.http.post(this.baseUrl+'/account/login',model).pipe(
      map((response:User) =>{
        console.log("map and res succesfully");
        const user = response;
        if(user){
          console.log("if statement succesfuuly")
          localStorage.setItem('user',JSON.stringify(user));
          this.curentUserSource.next(user);
        }
      })
    )
  }
  setCurentUser(user:User){
    this.curentUserSource.next(user);
  }
  logout(){
    localStorage.removeItem('user');
    this.curentUserSource.next(null);

  }
}
