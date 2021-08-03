import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormationRequest} from '../../../_service/Models/FormationRequest';
import {Observable} from 'rxjs';
import {UserResponse} from '../../../_service/Models/UserInformation';
import {TokenStorageService} from '../../auth-layout/_service/token-storage.service';
const API_URL = 'http://localhost:9098/admin/';
@Injectable({
  providedIn: 'root'
})
export class UpdateInformationService {
  id: number ;
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
  }

  public updateUserInformation(userInformation: UserResponse): Observable<String> {
    return this.http.post<String>(API_URL, userInformation);
  }
  public getUserInformation(): Observable<UserResponse>  {
    this.id =  this.tokenStorage.getUser().id;
    return this.http.get<UserResponse>(API_URL.concat('info/' + this.id.toString()));
  }
}
