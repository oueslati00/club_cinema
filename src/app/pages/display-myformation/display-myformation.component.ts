import { Component, OnInit } from '@angular/core';
import {FormateurService} from '../../_service/formateur.service';
import {AdminserviceService} from '../../_service/adminservice.service';

@Component({
  selector: 'app-display-myformation',
  templateUrl: './display-myformation.component.html',
  styleUrls: ['./display-myformation.component.css']
})
export class DisplayMyformationComponent implements OnInit {
  compteRenduList: any[] = [];
  constructor(private formateurService: FormateurService, private adminService :AdminserviceService) { }

  ngOnInit(): void {

    this.formateurService.getListCompteRenduForForamteurById(11).subscribe(
      data => {
         this.compteRenduList = data;
      }, err => {
        console.log(err);
      }
    );
  }

  downloadcompteRendu(fileId: any) {
    this.adminService.downloadCompteRendu(fileId);
  }
}
