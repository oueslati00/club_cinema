import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {VideoDkika} from '../../../_service/Models/VideoDkika';
import {HttpClient} from '@angular/common/http';
const API_URL = 'http://localhost:9098/videoDkika/';
@Injectable({
  providedIn: 'root'
})
export class VideodkikaService {

  constructor(private http: HttpClient) { }
  public addVideoDkika(videoDkika: VideoDkika): Observable<String> {
    return this.http.post<String>(API_URL, videoDkika);
  }
  public removeVideoDkika(id: number): Observable<String> {
    return this.http.delete<String>(API_URL.concat('/' + id.toString()));
  }
  public updateVideoDkika(videoDkika: VideoDkika): Observable<String> {
    return this.http.put<String>(API_URL, videoDkika);
  }
  public getVideoDkika(id: number): Observable<VideoDkika[]> {
    return this.http.get<VideoDkika[]>(API_URL.concat('/' + id.toString()));
  }
}
