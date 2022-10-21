import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Accept','*/*')
  .set('Cache-Control','no-cache')


  //private url: string ='http://localhost:8088/user'
  //private urlLogin: string ='http://localhost:8088/user/login'
  private urlLogin: string = environment.apiUrl+'user/login'
  private userLogado:User = {id:0, email:'', password:''}

  constructor( private httpClient : HttpClient) { }

  getLogin(userLogin:User):Observable<User>{
    const body = JSON.stringify(userLogin)
    return this.httpClient.post<User>(this.urlLogin,body, {'headers':this.headers})
  }

  getUser():User{
    if (this.userLogado.id==0){
      return {id:0, email:'', password:''}
    }
    return this.userLogado
  }

  setUser(user:User){
    this.userLogado=user
  }

}
