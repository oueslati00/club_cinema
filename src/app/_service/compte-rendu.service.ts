import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const COMPTE_RENDU = '/api/user/compteRendu';
@Injectable({
  providedIn: 'root'
})
export class CompteRenduService {
  constructor(private http: HttpClient) { }

  sendcompteRendu(file: File , courId: number , userId: number): Observable <any>{
    var formdata : any = new FormData();
    formdata.append('file' , file);
    formdata.append('courId', courId);
    formdata.append('userId', userId);
    return this.http.post<any>('http://localhost:9097/api/user/compteRendu', formdata);
  }
}
