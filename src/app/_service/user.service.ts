import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
const DISPLAY_FORMATION_API = 'http://localhost:9097/api/user/formation/';

const COMPTE_RENDU = '/api/user/compteRendu';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const hhtpOptionsForStream = {
  headers : new HttpHeaders({ 'Content-Type': 'video/mp4'})
}
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
const listFormation: FormationInformation[] = [
  {id : 1 , formateurName: 'brahim1' , formationName : 'test1' , dateToStart: '11/12/1991'},
  {id : 3 , formateurName: 'brahim3' , formationName : 'test3' , dateToStart: '11/12/1993'},
  {id : 4 , formateurName: 'brahim4' , formationName : 'test4' , dateToStart: '11/12/1994'},
  {id : 5 , formateurName: 'brahim5' , formationName : 'test5' , dateToStart: '11/12/1995'},
];
const listF: FormationDisplay = {
  id: 3,
  formateurId: null,
  name: 'brahim',
  firstDate : '2021-06-30',
  finalDate: '2021-06-01',
  description: 'introductfhfghion of the first part ',
  chapter: [
    {
      id: 54,
      name: 'chgfgdter1',
      cours: [
        {
          id: 93,
          name: 'tivsv',
          description: null
        },
        {
          id: 93,
          name: 'tivsv',
          description: null
        },
        {
          id: 93,
          name: 'tivsv',
          description: null
        },
        {
          id: 93,
          name: 'tivsv',
          description: null
        }
      ]
    },
    {
      id: 55,
      name: 'chapfhfghter2',
      cours: [
        {
          'id': 94,
          'name': 'odsq ',
          'description': null
        },
        {
          'id': 94,
          'name': 'odsq ',
          'description': null
        },
        {
          'id': 94,
          'name': 'odsq ',
          'description': null
        },
        {
          'id': 94,
          'name': 'odsq ',
          'description': null
        }
      ]
    }
  ],
};
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
    return this.http.get<any>('http://localhost:9097/api/user/formation/byterange/186', {"responseType" : 'blob'});

  }
}
