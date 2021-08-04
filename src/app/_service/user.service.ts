import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class FormationInformation {
  Id: number ;
  formationName: string ;
  formateurName: string ;
  dateToStart: string;

}
export class FormationDisplay {
  id: number ;
  formateurId: number ;
  name: string;
  FirstDate: string;
  FinalDate: string;
  description: string;
  Chapter: Chapter[];
}
export class Chapter {
  id: number;
  name: string;
  cours: Cours[];
}
export class Cours {
  id: number;
  name: string;
  description: string;
}
const listFormation: FormationInformation[] = [
  {Id : 1 , formateurName: 'brahim1' , formationName : 'test1' , dateToStart: '11/12/1991'},
  {Id : 3 , formateurName: 'brahim3' , formationName : 'test3' , dateToStart: '11/12/1993'},
  {Id : 4 , formateurName: 'brahim4' , formationName : 'test4' , dateToStart: '11/12/1994'},
  {Id : 5 , formateurName: 'brahim5' , formationName : 'test5' , dateToStart: '11/12/1995'},
];

const listF: FormationDisplay = {
  id: 3,
  formateurId: null,
  name: 'brahim',
  FirstDate : '2021-06-30',
  FinalDate: '2021-06-01',
  description: 'introductfhfghion of the first part ',
  Chapter: [
    {
      id: 54,
      name: 'chgfgdter1',
      cours: [
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
          'name': 'o ',
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

  constructor(private http: HttpClient) { }
  getformationList(): FormationInformation[] {
    return listFormation;
  }
  getFormationById(id: number): FormationDisplay {
    return listF;

  }
}
