import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http: HttpClient) { }

  getAllForamtion(): Observable<any> {
    return this.http.get<any>(environment.url + 'api/user/formation/list');
  }

  getCompteRendubyformation(idformation: any): Observable<any> {
    return this.http.get(environment.url + 'api/admin/list/compteRenduByformation/' + idformation);

  }

  downloadCompteRendu(id: any): void {
     this.http.get(environment.url + 'api/admin/compteRendu/byterange/' + id , { responseType: 'text' as 'json'}).subscribe(
       data => this.downloadFile(data)
     );
  }

  downloadFile(data: any) {
    const blob = new Blob([data], { type: 'text' });
    const a = document.createElement('a');
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'compteRendu.txt';
    a.click();
    URL.revokeObjectURL(url);

  }

  getStat(): Observable<any> {
    return this.http.get(environment.url + 'api/admin/statistic');

  }
}
