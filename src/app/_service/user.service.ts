import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
const DISPLAY_FORMATION_API = 'http://localhost:9097/api/user/formation/';
const USER_INFORMATION_API = 'http://localhost:9097/api/user/';
const COMMENT_API = 'http://localhost:9097/api/user/Comment/';
const COMPTE_RENDU = 'http://localhost:9097/api/user/compteRendu';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export class FormationInformation {
  id: number ;
  formationName: string ;
  formateurName: string ;
  dateToStart: string;
  constructor(Id: number, formationName: string, formateurName: string , dateToStart: string) {
    this.id = Id;
    this.dateToStart = dateToStart;
    this.formationName = formationName;
    this.formateurName = formateurName;
  }

}
export interface FormationDisplay {
  id: number ;
  formateurId: number ;
  name: string;
  firstDate: string;
  finalDate: string;
  description: string;
  chapter: Chapter[];
}
export interface Chapter {
  id: number;
  name: string;
  cours: Cours[];
}
export interface Cours {
  id: number;
  name: string;
  description: string;
}
export class Comment {
  courId: number ;
  userName: string;
  localDate: string;
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  formation: FormationDisplay;

  constructor(private http: HttpClient) { }
  getformationList(): Observable<FormationInformation[]> {
    return this.http.get<FormationInformation[]>(DISPLAY_FORMATION_API + 'list' );
  }
  getFormationById(id: number): Observable<FormationDisplay> {
    return this.http.get<FormationDisplay>(DISPLAY_FORMATION_API + id);

  }
  setFormation(formation: FormationDisplay) {
    this.formation = formation;
  }
  // stream a video
  streamVideoFormation(idcour: number): Observable<any> {
    return this.http.get<any>('http://localhost:9097/api/user/formation/byterange/186', { responseType: 'blob' as 'json'});

  }
  getduration(formationId: number): Observable<any> {
    return this.http.get<any>(DISPLAY_FORMATION_API + 'duration', httpOptions);
  }

  getUserInformation(id: number): Observable<any> {
    return this.http.get(USER_INFORMATION_API + 'informationUser/' + id.toString());
  }

  // comment service
  getcommentByCours(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(COMMENT_API + 'cours/' + id , httpOptions);
  }
  addComment(username: string, courid: number, description: string): Observable<any> {
    return this.http.post<any>(COMMENT_API, {
      'cour' : courid.toString(),
      'username' : username,
      'description' : description
    }, httpOptions);
  }

  // compteRendu service

  sendcompteRendu(file: File , courId: number , userId: number): Observable <any>{
    var formdata : any = new FormData();
    formdata.append('file' , file);
    formdata.append('courId', courId);
    formdata.append('userId', userId);
    return this.http.post<any>('http://localhost:9097/api/user/compteRendu', formdata);
  }

}
