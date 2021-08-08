import { Component, OnInit } from '@angular/core';
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from 'ngx-file-drop';
import {CoursSend, FormateurService, FormationSend} from '../../_service/formateur.service';
import {Cours} from '../../_service/user.service';



@Component({
  selector: 'app-addformation',
  templateUrl: './addformation.component.html',
  styleUrls: ['./addformation.component.css']
})
export class AddformationComponent implements OnInit {
  forma: FormationSend;
  cours : CoursSend;
  panelOpenState: boolean;
  public files: NgxFileDropEntry[] = [];
  file: File;
  constructor(private formation: FormateurService) {

  }

  ngOnInit(): void {
    console.log('ng on int of add formation component ');
   this.forma = this.formation.createEmptyFormation();
    this.cours = this.forma.chapter[0].cour[0];
   console.log(this.forma);
  }
  ValidateFormation() {
     // TODO : add this final request to database
    console.log(this.forma);
    this.formation.sendformation(this.forma).subscribe(
      data => {

      }
    )
  }
  ReciveEvent($event: CoursSend) {
    console.log('recive event was executed');
    console.log($event);
    this.cours = $event;
  }
}
