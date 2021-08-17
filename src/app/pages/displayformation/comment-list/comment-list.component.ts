import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TokenStorageService} from '../../../layouts/auth-layout/_service/token-storage.service';
import {UserService, Comment} from '../../../_service/user.service';


@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit , OnChanges {
  @Input() idcour: number;
  comment: Comment[] = [];
  error = '';
  username = '';
  constructor(private userService: UserService , private token: TokenStorageService) { }

  ngOnInit(): void {
    this.userService.getcommentByCours(this.idcour).subscribe(
      data => {
        this.comment = data;
        console.log('*************');
        console.log(this.comment);
        console.log('************');
        console.log(this.comment);
        console.log('execute this method from coment compoent with id cour equal to ' + this.idcour);
        console.log(this.comment);
        this.comment = this.userService.addImageToAllComment(this.comment);
        console.log('///////////');
        console.log(this.comment[0].imageUrl);
      }, err => {
        console.log(err);
        this.error = err;
    }
    );
  }

 async addTodo(value: string) {
    console.log(value);
    // add this comment to user database
    await this.token.getUser2().then(
    data => {
      this.username = data.username;
    }
      );

    await this.userService.addComment(this.username, this.idcour , value).subscribe(
      data => {
       this.ngOnInit();
      }, error1 => {
        console.log(error1);
      }
    );
    // receive request and add it list
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }
}
