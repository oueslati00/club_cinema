import { Component, OnInit } from '@angular/core';
import {ForgetpasswordService} from '../../../_service/forgetpassword.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sendcode',
  templateUrl: './sendcode.component.html',
  styleUrls: ['./sendcode.component.css']
})
export class SendcodeComponent implements OnInit {
  form: any = {};
  isSend = false;
  isSendFailed = false;
  errorMessage = '';

  constructor(private fgpass: ForgetpasswordService, private route: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('on susbmit method for validate code was executed ');
    console.log(this.form.code);
    this.fgpass.validateCode(this.form.code).subscribe(
      data => {
        this.isSendFailed = false;
        this.isSend = true;
        this.fgpass.setcode(this.form.code);
        this.route.navigate(['auth/forgetPassword/updatePassword']);
      }
      ,
      err => {
        this.errorMessage = err.error.message;
        this.isSendFailed = true;
      });
  }
}
