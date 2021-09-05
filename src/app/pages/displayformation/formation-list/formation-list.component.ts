import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormationInformation, UserService} from '../../../_service/user.service';
import {FormateurService} from '../../../_service/formateur.service';
import {simpleuser} from '../../../_service/Models/User';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {
  list: FormationInformation[];
  listWithoutFilter: FormationInformation[];
  error = '';
  isChecked = false;
  message = 'all formations';
  username = '';
  user: any;
  constructor(private userService: UserService, private formateurservice: FormateurService) {
  }

  ngOnInit(): void {
    this.userService.getUserByToken().subscribe(
      data => {
        this.user = data;
      this.username = data.username;
      }
    );
    this.userService.getformationList().subscribe(
      data => {
        this.list = data;
        this.listWithoutFilter = data;
        this.list = this.userService.AddImageToAllFormation(this.list);
        console.log(this.list);
      }, error => {
        console.log(error);
        this.error = error;
      }
    );
  }


  checkCheckBoxvalue() {
    this.userService.getUserByToken().subscribe(
      data => {
        console.log(this.isChecked);
        if (this.isChecked) {
          this.list = this.listWithoutFilter.filter(x => x.formateurName === data.username);
          console.log(this.list);
          this.message = 'mes formations';
        } else {
          this.list = this.listWithoutFilter;
          this.message = 'all formations';
        }
      }
    );
  }

  remove(formation: FormationInformation) {
    this.formateurservice.removeFormation(formation.id).subscribe(
      data => {
        this.ngOnInit();
      }
    );
  }

  NotSimpleUSer(): boolean {
   const  testAdmin = this.user.roles.map(x => x.name).includes('ROLE_ADMIN' );
   const testFormateur =  this.user.roles.map(x => x.name).includes('ROLE_MODERATOR' );
   console.log('test' + testAdmin || testFormateur);
    return testAdmin || testFormateur ;
  }
}
