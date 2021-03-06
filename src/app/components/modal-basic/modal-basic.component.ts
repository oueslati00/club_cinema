import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AdminserviceService} from '../../_service/adminservice.service';
interface compteRendu {
  Chapter_name: string;
  Cour_name: string;
  Url: String;
}
@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.css']
})
export class ModalBasicComponent implements OnInit {
  @Input() idformation: any;
  closeResult = '';
  compteRenduList: any;
  listOfCompteRendu : compteRendu[] = [
    {Chapter_name: 'first chapter', Cour_name : 'first cour', Url: 'test test test'},
    {Chapter_name: 'first chapter', Cour_name : 'first cour', Url: 'test test test'},
    {Chapter_name: 'first chapter', Cour_name : 'first cour', Url: 'test test test'},
    {Chapter_name: 'first chapter', Cour_name : 'first cour', Url: 'test test test'},
  ]


  constructor(private modalService: NgbModal , private adminService: AdminserviceService ) {}

  ngOnInit(): void {
    console.log('compte rendu list ' + this.idformation);
       this.adminService.getCompteRendubyformation(this.idformation).subscribe(
         data => {

           this.compteRenduList = data;
         }
       );
    }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      /*this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;*/
    });
  }


  downloadCompteRendu(id: any){
    this.adminService.downloadCompteRendu(id);
  }
}
