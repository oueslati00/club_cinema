import { Component, OnInit } from '@angular/core';
import {AdminserviceService} from '../../_service/adminservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListAdminComponent implements OnInit {
  listforamtion: any[] = [];
  constructor(private adminservice: AdminserviceService, private route: Router) { }

  ngOnInit(): void {
    this.adminservice.getAllForamtion().subscribe(
      data => {
        this.listforamtion = data;
      }, error => {
        console.log(error);
      }
    );
  }

  redirectTo(id: number) {
    this.route.navigate(['/admin/userformation/' + id]);
  }

}
