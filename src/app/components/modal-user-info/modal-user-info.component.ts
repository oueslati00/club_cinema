import {Component, Input, OnInit, Sanitizer} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../../_service/user.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-modal-user-info',
  templateUrl: './modal-user-info.component.html',
  styleUrls: ['./modal-user-info.component.css']
})
export class ModalUserInfoComponent implements OnInit {
  @Input() user: any;
  imageUrl: any;
  constructor(private modalService: NgbModal, private userService: UserService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.userService.streamImageByUserId(this.user.id).subscribe(
      data => {
        const url = URL.createObjectURL(data);
        this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        console.log('image was loaded ');
      }, error => {
        console.log(error);
      }
    );
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
      /*this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;*/
    });
  }
}
