import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {formation} from '../../../_service/Models/formation';
import {Observable} from 'rxjs';
import { FormationRequest} from '../../../_service/Models/FormationRequest';
const API_URL = 'http://localhost:9098/admin/formation/';
@Injectable({
  providedIn: 'root'
})
export class FormationService {
  formation: formation;
  constructor(private http: HttpClient) {
    this.formation = new formation(1);
    this.formation.chapter = [];
  }
  public addFormation(formationvar: FormationRequest): Observable<String> {
    return this.http.post<String>(API_URL, formationvar);
  }

}
