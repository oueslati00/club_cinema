import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {simpleuser} from '../../../_service/Models/User';
const API_URL = 'http://localhost:9097/admin/';

@Injectable({
  providedIn: 'root'
})
export class SimpleuserService {
  private test: Observable<string>;

  constructor(private http: HttpClient) { }
  public userList(): Observable<simpleuser[]> {
    return this.http.get<simpleuser[]>('http://localhost:9097/api/admin/simpleuser');
  }
  public VerifiedById(id: number): Observable<string> {
    console.log(id);
   this.test = this.http.get<string>(API_URL.concat(id.toString()));
   console.log(this.test);
    return this.test;
  }

  verifiedThisAccount(id: number): Observable<any> {
  return   this.http.get('http://localhost:9097/api/admin/vUser/' + id.toString());
  }

  UnverifiedThsiAccount(id: number): Observable<any> {
    return this.http.get('http://localhost:9097/api/admin/user/Unvalidate/User/' + id.toString());
  }

  deleteformateurAccess(id: number): Observable<any> {
    return this.http.get('http://localhost:9097/api/admin/user/delete/Formateur/' + id.toString());
  }

  setUserAsFormateur(id: number): Observable<any> {
    return this.http.get('http://localhost:9097/api/admin/vFormateur/' + id.toString());
  }
}
