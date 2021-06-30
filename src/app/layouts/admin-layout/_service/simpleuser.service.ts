import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {simpleuser} from '../../../Models/User';
const API_URL = 'http://localhost:9098/admin/';

@Injectable({
  providedIn: 'root'
})
export class SimpleuserService {
  private test: Observable<string>;

  constructor(private http: HttpClient) { }
  public userList(): Observable<simpleuser[]> {
    return this.http.get<simpleuser[]>(API_URL);
  }
  public VerifiedById(id: number): Observable<string> {
    console.log(id);
   this.test = this.http.get<string>(API_URL.concat(id.toString()));
   console.log(this.test);
    return this.test;
  }
}
