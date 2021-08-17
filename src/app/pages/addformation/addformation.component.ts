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
  cours: CoursSend;
  panelOpenState: boolean;
  formulaireTrue = false;
  formulaireFalse = false;
  formulaireenCours = false;
  Validation_Message = '';

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
 async ValidateFormation() {
   this.formulaireTrue = false;
   this.formulaireFalse = false;
   this.formulaireenCours = false;
    this.formulaireenCours = true;
   this.Validation_Message = 'formation en cour';
    console.log(this.forma);
    await this.formation.sendformation(this.forma);
   if (this.formation.validationMessage.length === 0) {
     this.formulaireTrue = true;
     this.Validation_Message = ' formation was added to data base correctly ';
     this.formulaireenCours = false;
     this.formation.validationMessage = '';
   } else {
     this.formulaireenCours = false;
     this.formulaireFalse = true;
     this.Validation_Message = this.formation.validationMessage;
     this.formation.validationMessage = '';
   }
  }
  ReciveEvent($event: CoursSend) {
    console.log('recive event was executed');
    console.log($event);
    this.cours = $event;
  }
}
