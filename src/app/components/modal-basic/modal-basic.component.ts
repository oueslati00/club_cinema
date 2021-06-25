import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
interface compteRendu{
  Chapter_name: string;
  Cour_name: string;
  Url: String;
}
@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.css']
})
export class ModalBasicComponent {
  closeResult = '';
  listOfCompteRendu : compteRendu[] = [
    {Chapter_name: 'first chapter', Cour_name : 'first cour', Url: 'test test test'},
    {Chapter_name: 'first chapter', Cour_name : 'first cour', Url: 'test test test'},
    {Chapter_name: 'first chapter', Cour_name : 'first cour', Url: 'test test test'},
    {Chapter_name: 'first chapter', Cour_name : 'first cour', Url: 'test test test'},
  ]


  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      /*this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;*/
    });
  }

/*  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }*/

}
