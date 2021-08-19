import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {observable, Observable} from 'rxjs';
import {chapter} from './Models/formation';
import {simpleuser} from './Models/User';
import {TokenStorageService} from '../layouts/auth-layout/_service/token-storage.service';

const FORMATEUR_ADD_FORMATION_API = 'http://localhost:9097/api/formateur/formation';
const FORMATEUR_ADD_VIDEO_API = 'http://localhost:9097/api/formateur/formation/addVideo';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export class FormationSend {
  public id: number;
  public formateurId: number;
  public name: string;
  public chapter: ChapterSend[];
  public firstDate: Date;
  public finalDate: Date;
  public description: string;
  public duration: number;

  constructor(formateurId: number, name: string, chapter: ChapterSend[],
              firstDate: Date, finalDate: Date, description: string, id: number) {
    this.id = id;
    this.formateurId = formateurId;
    this.name = name;
    this.chapter = chapter;
    this.firstDate = firstDate;
    this.finalDate = finalDate;
    this.description = description;
  }

}
export class ChapterSend {
  public id: number;
 public name: string;
 public cour: CoursSend[];

  constructor(name: string, cour: CoursSend[], id: number) {
    this.name = name;
    this.cour = cour;
    this.id = id;
  }
}
export class CoursSend {
  public name: string;
  public description: string;
  public file: File;
  public id: number;
  public vid: number;
  constructor(name: string, description: string, file: File, id: number) {
    this.name = name;
    this.description = description;
    this.file = file;
    this.id = id;
  }
}

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  validationMessage = '';
  formation: FormationSend;
  test: any;
  constructor(private http: HttpClient, private token : TokenStorageService) { }
  validateFormation(formationSend: FormationSend): boolean {
    console.log(formationSend.firstDate);
    if (formationSend.finalDate === null || formationSend.firstDate === null) {
      this.validationMessage =  this.validationMessage.concat(' please set a correct date');
      return false;
    }
    if (formationSend.name === null || formationSend.description === null ) {
      this.validationMessage = this.validationMessage.concat('please set a coorect information');
     return false;
    }
    for (let i = 0 ; i < formationSend.chapter.length ; i ++) {
      if (formationSend.chapter[i].name == null) {
        this.validationMessage = this.validationMessage.concat('please set a coorect chapter name');
        return false;
      }
      for (let j = 0 ; j < formationSend.chapter[i].cour.length ; j++) {
         const cour  = formationSend.chapter[i].cour[j];
        if (cour.file === null) {
          this.validationMessage = this.validationMessage.concat('please set file to  cour information');
          return false;
        }
        if (cour.description === null || cour.name === null) {
          this.validationMessage = this.validationMessage.concat('please set a coorect cour information');
          return false;
        }
      }
    }
    return true;
  }
  async sendVideoByFormateur (formdata: any, cour: CoursSend) {
     await this.http.post<number>(FORMATEUR_ADD_VIDEO_API, formdata).toPromise().then(
       data => {
         cour.vid = data;
       }, err => {
         this.validationMessage = this.validationMessage.concat(' video of cour ' + cour.name + ' was not  added correctly');
       }
     );
  }

  async sendListOfVideoOfFormation(formationSend: FormationSend) {

  }
 async sendformation(formationSend: FormationSend) {

    if (this.validateFormation(formationSend) === true) {
      for (let i = 0 ; i < formationSend.chapter.length ; i++) {
           for (let j = 0 ; j < formationSend.chapter[i].cour.length ; j++) {
             console.log('add cour' + j + ' of chapter ' + i);
             const formadata: any = new FormData();
             formadata.append('file', formationSend.chapter[i].cour[j].file);
             await this.sendVideoByFormateur(formadata, formationSend.chapter[i].cour[j]);
           }
      }

      console.log('the add of video was efected with sucess');
     await this.token.getUser2().then(
        data => {
          console.log(' get formateur Id was executed ');
          formationSend.formateurId = data.id;
        }
      );
      console.log( 'the formation that was send  ');
      console.log(formationSend);
      await this.http.post<FormationSend>(FORMATEUR_ADD_FORMATION_API, formationSend, httpOptions).toPromise()
        .then(
          data => {
          console.log('the formation was send with sucess ');
          console.log(data);
        }, error => {
          console.log(error);
        }
      );
    }
    console.log(this.validationMessage);
  }

  createEmptyFormation(): FormationSend {
    const chapterListEmpty: ChapterSend[] = new Array();
    const coursListEmpty: CoursSend[] = new Array();
    const cours: CoursSend = new CoursSend('new cour', null, null, null);
    coursListEmpty.push(cours);
    const chapter = new ChapterSend(null, coursListEmpty, null);
    chapterListEmpty.push(chapter);

    this.formation = new FormationSend(null, null, chapterListEmpty, null, null, null, null);
    return this.formation;
  }

  getListCompteRenduForForamteurById(id: number): Observable<any> {
   return  this.http.get<any>('http://localhost:9097/api/formateur/list/compteRendu/33');
  }
}
