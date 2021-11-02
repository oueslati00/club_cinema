import {Injectable, Type} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';


const FORGET_PASSWORD_API = environment.url + 'api/auth/forget/';
interface Fgpass {
  code: string;
  password: string;
  email: string ;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {
  constructor(private http: HttpClient ) {
  }

  fg: Fgpass =  new class implements Fgpass {
    code: string;
    email: string;
    password: string;
  };

  sendCode(email): Observable<any> {
     return this.http.post(FORGET_PASSWORD_API + 'sendcode', {
       email: email
     }, httpOptions);
   }

  validateCode(code: string): Observable<any> {
    return this.http.post(FORGET_PASSWORD_API + 'validateCode', {
      email: this.fg.email,
      code : code
    }, httpOptions);
  }

  updatePassword(password: string): Observable<any> {
    return this.http.post(FORGET_PASSWORD_API + 'UpdatePassword', {
      email: this.fg.email,
      code : this.fg.code,
      password : password
    }, httpOptions);
  }

  setcode(code: string) {
    this.fg.code = code;
    console.log('fgpass');
    console.log(this.fg.email);
    console.log(this.fg.code);
    console.log(this.fg);
  }
  setpassword(password: string) {
    this.fg.password = password;
    console.log('fgpass');
    console.log(this.fg.password);
    console.log(this.fg);
  }
  setemail(email: string) {
    this.fg.email = email;
    console.log('fgpass');
    console.log(this.fg.email);
    console.log(this.fg);
  }

  destory() {
    this.fg.code = null;
    this.fg.password = null;
    this.fg.email = null;
  }
}
