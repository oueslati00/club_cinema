import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cours, FormationDisplay} from '../../../_service/user.service';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {

  cours: Cours;

  @Input() formation: FormationDisplay;
  @Output() sendRequest = new EventEmitter();
  panelOpenState: boolean;
  constructor() { }

  ngOnInit(): void {
    console.log('chapter list component');
    console.log(this.formation);
  }

  courselected(cours: Cours) {
    console.log(cours);
    this.cours = cours;
    this.sendEvent(this.cours);
  }
  sendEvent(id) {
    this.sendRequest.emit(id);
  }
}
