import { HttpClient } from '@angular/common/http';
import { ENVIRONMENT_INITIALIZER, Injectable } from '@angular/core';
import { Environments } from '../../environments/environments.local';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(body:any):Observable<any>{
    return this.http.post(`${Environments.API_URL}/user/login`,body,{responseType:"json" })
  }
isLogding(){
  let Token=localStorage.getItem('Token')
  if(Token){
    return true
  }
  else {
    return false
  }
}
getToken(){
  return localStorage.getItem('Token')
}
}
