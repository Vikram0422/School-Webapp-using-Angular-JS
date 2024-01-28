import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginmodel } from '../authentication/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly URL:string = "http://localhost:8090/api/logins"

  constructor(private http: HttpClient) { }

  Create(data:loginmodel):Observable<loginmodel>{
    return this.http.post<loginmodel>(this.URL,data);
  }

  Getall():Observable<loginmodel[]>{
    return this.http.get<loginmodel[]>(this.URL);

  }
}
