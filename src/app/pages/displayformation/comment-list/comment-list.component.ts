import {Component, Input, OnInit} from '@angular/core';
import {Comment, CommentRequest, CommentService} from '../../../_service/comment.service';
import {TokenStorageService} from '../../../layouts/auth-layout/_service/token-storage.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() idcour: number;
  comment: Comment[];
  error = '';
  co: CommentRequest;
  constructor(private commentService: CommentService , private token: TokenStorageService) { }

  ngOnInit(): void {
    this.commentService.getcommentByCours(this.idcour).subscribe(
      data => {
        this.comment = data;
      }, err => {
        console.log(err);
        this.error = err;
    }
    );
    console.log(this.comment);
    console.log('execute this method from coment compoent with id cour equal to ' + this.idcour);
  }

  addTodo(value: string) {
    console.log(value);
    // add this comment to user database
    var username = this.token.getUser().username;

    this.commentService.addComment(username, this.idcour , value).subscribe(
      data => {
       this.ngOnInit();
      }, error1 => {
        console.log(error1);
      }
    );
    // receive request and add it list
  }
}
