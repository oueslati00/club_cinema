import {Component, Inject, OnInit} from '@angular/core';
import {SimpleuserService} from '../../layouts/admin-layout/_service/simpleuser.service';
import {simpleuser} from '../../_service/Models/User';
import {AdminserviceService} from '../../_service/adminservice.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  errormessage: string;
  listofuser: simpleuser[] = [];
  formationNumb: any;
  VideoNumber: any;
  CompteRenduNumber: any;


  constructor(private simpleuserservice: SimpleuserService, private adminService : AdminserviceService) {
  }

  ngOnInit() {
    this.adminService.getStat().subscribe(
      (data) => {
        console.log(data);
        this.formationNumb = data.formationNumber;
        this.VideoNumber = data.videoNumber;
        this.CompteRenduNumber = data.compteRenduNumber;
      }
    );
    this.simpleuserservice.userList().subscribe(
      (p) => {
        this.listofuser = p;
        console.log(p);
      },
      error => {
        this.errormessage = error.error.message;
      }
    );
  }
  isModerator(user: simpleuser): boolean {
    return user.roles.map(x => x.name).includes('ROLE_MODERATOR');
  }

  verifiedThisAccount(user: simpleuser) {
    this.simpleuserservice.verifiedThisAccount(user.id).subscribe(
      data => {
        this.ngOnInit();
      }, error => {
        console.log(error);
      }
    );

  }

  UnverifiedThsiAccount(user: simpleuser) {
    this.simpleuserservice.UnverifiedThsiAccount(user.id).subscribe(
      data => {
        console.log('simple user service was executed');
        this.ngOnInit();
      }, error => {
        console.log(error);
      }
    );
  }

  FromFormateurToSimpleUser(user: simpleuser) {
    this.simpleuserservice.deleteformateurAccess(user.id).subscribe(
      data => {
        this.ngOnInit();
      }
    );
  }

  FromSimpleUserTOFormateur(user: simpleuser) {
    this.simpleuserservice.setUserAsFormateur(user.id).subscribe(
      data => {
        this.ngOnInit();
      }
    );
  }

  getRole(user: simpleuser) {
    if (this.isModerator(user)) {
      return 'Formateur';
    }
    return 'Simple User';
  }
}




