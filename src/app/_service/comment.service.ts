import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
const COMMENT_API = 'http://localhost:9097/api/user/Comment/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export class Comment {
  courId: number ;
  userName: string;
  localDate: string;
  description: string;
}
export class CommentRequest {
  cour: number ;
  username: string;
  description: string;
  constructor(cour: number , username: string, description: string ) {
  this.cour = cour;
  this.description = description;
  this.username = username;
  }
}


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }
   getcommentByCours(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(COMMENT_API + 'cours/' + id , httpOptions);
  }
  addComment(username : string, courid: number, description: string): Observable<any> {
    return this.http.post<any>(COMMENT_API, {
      'cour' : courid.toString(),
      'username' : username,
      'description' : description
    }, httpOptions);
  }
}
