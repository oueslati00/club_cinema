import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../layouts/auth-layout/_service/auth.service';
import {TokenStorageService} from '../../layouts/auth-layout/_service/token-storage.service';
import {Routes} from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit, OnDestroy {


  ngOnDestroy(): void {
  }

  ngOnInit(): void {

  }



}
