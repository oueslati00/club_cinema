import { Component, OnInit } from '@angular/core';
import {ForgetpasswordService} from '../../../_service/forgetpassword.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {

  form: any = {};
  isSend = false;
  isSendFailed = false;
  errorMessage = '';
  constructor(private fgpassword: ForgetpasswordService, private route: Router) {}

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log('submit method was executed of update password ');
    console.log(this.form.password);
    this.fgpassword.updatePassword(this.form.password).subscribe(
      data => {
        this.isSendFailed = false;
        this.isSend = true;
        this.fgpassword.setpassword(this.form.password);
        this.route.navigate(['auth/login']);
        this.fgpassword.destory();
      }
    );
  }
}
