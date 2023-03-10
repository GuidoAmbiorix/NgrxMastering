import { User } from '../../../interfaces/user';
import { AuthResponse } from '../../../interfaces/auth-response';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(email:string,password:string):Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`
    ,{email,password,returnSecureToken:true});
  }

  singUp(email:string,password:string):Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIREBASE_API_KEY}`
    ,{email,password,returnSecureToken:true});
  }

  formatUser(data:AuthResponse){
    const expirationDate =  new Date(new Date().getTime() + +data.expiresIn * 1000);
    const user = new User(data.email,data.idToken,data.localId,expirationDate);
    return user;
  }

  getErrorMessage(message:string){
    switch(message){
      case 'EMAIL_NOT_FOUND': return 'Email Not Found';
      case 'INVALID_PASSWORD': return 'Invalid Password';
      case 'EMAIL_EXISTS': return 'Email already exists';
      default: return 'Unknown error occurred. Please try again';
    }
  }

}
