import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {DomSanitizer} from '@angular/platform-browser';
const DISPLAY_FORMATION_API = environment.url + 'api/user/formation/';
const USER_INFORMATION_API = environment.url + 'api/user/';
const COMMENT_API = environment.url + 'api/user/Comment/';
const COMPTE_RENDU = environment.url + 'api/user/compteRendu';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export class FormationInformation {
  id: number ;
  formationName: string ;
  formateurName: string ;
  dateToStart: string;
  formatuerImageUrl: any;
  formateurId: number;
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
  durationPerNow: number;
}
export interface Chapter {
  id: number;
  name: string;
  cour: Cours[];
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
  userId: number ;
  imageUrl: any;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  formation: FormationDisplay;
  user: any;
  compteRenduIsDone = false;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }
  getformationList(): Observable<FormationInformation[]> {
    console.log('get list ofmration was executed ');
    return this.http.get<FormationInformation[]>(DISPLAY_FORMATION_API + 'list' );
  }
 async getFormationById(id: number) {
    return await this.http.get<FormationDisplay>(DISPLAY_FORMATION_API + id).toPromise();
  }
  setFormation(formation: FormationDisplay) {
    this.formation = formation;
  }
  // stream a video
  async streamVideoFormationBycourId(idcour: number) {
    const result = await this.http.get<any>(environment.url + 'api/user/formation/byterange/' + idcour.toString(), {responseType: 'blob' as 'json'}).toPromise()
   return  result;
  }

  getUserInformation(id: number): Observable<any> {
    return this.http.get(USER_INFORMATION_API + 'informationUser/' + id.toString());
  }

  updateInforamtionById(user: any, id: any): Observable<any> {
    return this.http.put(USER_INFORMATION_API + 'Information/' + id, user);
  }

  addImageByidUser( file: File , id: number): Observable<any> {
    let formdata: any = new FormData();
    formdata.append('imageProfil' , file);
    formdata.append('userId', id);
    console.log('id ');
    return this.http.post<any>(USER_INFORMATION_API + 'Image', formdata);
  }

  streamImageByUserId(id: number): Observable<any> {
    console.log('the id is  ' + id.toString());
    return this.http.get<any>(USER_INFORMATION_API + 'informationUser/image/' + id.toString() , { responseType: 'blob' as 'json'});
  }


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

   sendcompteRendu(file: File , courId: number) {
    this.getUserByToken().subscribe(
      data => {
        const formdata: any = new FormData();
        formdata.append('file' , file);
        formdata.append('courId', courId);
        formdata.append('userId', data.id);
        this.http.post<any>(environment.url + 'api/user/compteRendu', formdata).subscribe(
          data1 => {
            console.log(data1);
            this.compteRenduIsDone = true;
          }, error => {
            this.compteRenduIsDone = false;
          }
        );
      }
    )

  }
  addImageToAllComment(comment: Comment[]) {
   for (let i = 0 ; i < comment.length ; i++) {
     this.streamImageByUserId(comment[i].userId).subscribe(
       data => {
         const url = URL.createObjectURL(data);
         comment[i].imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
       }, error => {
         console.log('error' + i);
       }
     );
   }

    return comment;
  }

  AddImageToAllFormation(list: FormationInformation[]) {
    for ( let i = 0 ; i < list.length ; i++) {
      if (list[i].formateurId !== null) {
        this.streamImageByUserId(list[i].formateurId).subscribe(
          data => {
            const url = URL.createObjectURL(data);
            list[i].formatuerImageUrl =  this.sanitizer.bypassSecurityTrustResourceUrl(url);
          }, error => {
            list[i].formatuerImageUrl = '../../../assets/img/theme/team-1-800x800.jpg';
            console.log(error);
          }
        );
      } else {
        list[i].formatuerImageUrl = '../../../assets/img/theme/team-1-800x800.jpg';
      }

    }
    return list;

  }
  getUserByToken(): Observable<any> {
   return  this.http.get(environment.url + 'api/user/test');
  }

}
