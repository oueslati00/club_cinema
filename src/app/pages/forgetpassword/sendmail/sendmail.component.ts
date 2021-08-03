import { Component, OnInit } from '@angular/core';
import {ForgetpasswordService} from '../../../_service/forgetpassword.service';
import {Route, Router, Routes} from '@angular/router';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent implements OnInit {

  form: any = {};
  isSend = false;
  isSendFailed = false;
  errorMessage = '';
  constructor(private fgpassword: ForgetpasswordService, private route: Router) {}

  ngOnInit() {
  }
  onSubmit(): void {
    console.log('submit method executed');
    console.log(this.form.email);
     this.fgpassword.sendCode(this.form.email).subscribe(
      data => {
        console.log(this.form.email);
        this.isSendFailed = false;
        this.isSend = true;
        this.fgpassword.setemail(this.form.email);
        this.route.navigate(['auth/forgetPassword/sendcode']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSendFailed = true;
      },
    );
  }

  reloadPage(): void {
    window.location.reload();
  }


}
