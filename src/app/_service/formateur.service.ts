import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {chapter} from './Models/formation';
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

  formation: FormationSend;
  constructor(private http: HttpClient) { }

  sendformation(formationSend: FormationSend): any {
      for (let i = 0 ; i < formationSend.chapter.length ; i++) {
           for (let j = 0 ; j < formationSend.chapter[i].cour.length ; j++){
             console.log('add cour' + j + ' of chapter ' + i);
             var formadata : any = new FormData();
             formadata.append('file', formationSend.chapter[i].cour[j].file);
             this.http.post<number>(FORMATEUR_ADD_VIDEO_API, formadata).subscribe(
               data => {
                 console.log(data);
                 formationSend.chapter[i].cour[j].vid = data;
               }, error => {
                 console.log('error of video of cour' + j + ' of chapter ' + i);
                 console.log(error);
               }
             );
           }
           console.log('the add of video was efected with sucess');
        formationSend.formateurId = 33;
           console.log(formationSend);
           this.http.post<FormationSend>(FORMATEUR_ADD_FORMATION_API, formationSend, httpOptions).subscribe(
             data => {
               console.log(data);
             }, error => {
               console.log(error);
             }
           );
      }


  }

  createEmptyFormation(): FormationSend {
    let chapterListEmpty: ChapterSend[] = new Array();
    let coursListEmpty: CoursSend[] = new Array();
    let cours: CoursSend = new CoursSend('new cour', null, null, null);
    coursListEmpty.push(cours);
    let chapter = new ChapterSend(null, coursListEmpty, null);
    chapterListEmpty.push(chapter);

    this.formation = new FormationSend(null, null, chapterListEmpty, null, null, null, null);
    return this.formation;
  }
}
