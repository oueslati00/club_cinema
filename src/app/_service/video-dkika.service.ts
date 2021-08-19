import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormateurService} from './formateur.service';
import {DomSanitizer} from '@angular/platform-browser';

export class VideoDkikaRequest {
  description: string;
  editor: string ;
  videoName: string;
  video: number;
  file: File;
}
export class VideoDkikaResposne {
  id: number;
  description: string;
  editor: string;
  name: string;
  idVideo: number;
  videoDkikaUrl: any;
}
@Injectable({
  providedIn: 'root'
})
export class VideoDkikaService {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  // get description of all videoDkika
  getVideoDkikaList(): Observable<VideoDkikaResposne[]> {
     return this.http.get<VideoDkikaResposne[]>('http://localhost:9097/api/user/videoDkika/all');
  }
  // get video dkika by Id
  getById(id: number): Observable<VideoDkikaResposne> {
    return this.http.get<VideoDkikaResposne>('http://localhost:9097/api/user/videoDkika/' + id.toString());
  }

  // upload video
  uploadVideo(file: File): Observable<number> {
    let formadata: any = new FormData();
    formadata.append('file', file);
    console.log(formadata);
    return this.http.post<number>('http://localhost:9097/api/formateur/videoDkika/upload', formadata);
  }
  // remove video dkika  a travers son Id
  deleteVideo(id: number): Observable<any> {
    return this.http.delete('http://localhost:9097/api/admin/videoDkika/' + id);
  }

  // streamingVideoDkikaBySonId

  byterange(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:9097/api/user/Videodkika/byterange/' + id.toString(), { responseType: 'blob' as 'json'});
  }

  addVideoList(list: VideoDkikaResposne[]) {
    for (let i = 0; i < list.length; i++) {
      console.log(list[i].idVideo);
      if (list[i].idVideo !== null) {
      this.byterange(list[i].idVideo).subscribe(
        data => {
          console.log('test');
          const url = URL.createObjectURL(data);
          list[i].videoDkikaUrl =  this.sanitizer.bypassSecurityTrustResourceUrl(url);
          console.log(list[i].videoDkikaUrl);
        }, error => {
          console.log(error);
        }
      );
      }
    }
    return list;
  }
  // addVideoDkika description before uploading the file
   addvideoDescription(video: VideoDkikaRequest): Observable<any> {
    return this.http.post<any>('http://localhost:9097/api/formateur/videoDkika/video', video);
   }
}
