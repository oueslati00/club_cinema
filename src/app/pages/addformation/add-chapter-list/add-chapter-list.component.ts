import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormationDisplay} from '../../../_service/user.service';
import {ChapterSend, CoursSend, FormationSend} from '../../../_service/formateur.service';

@Component({
  selector: 'app-add-chapter-list',
  templateUrl: './add-chapter-list.component.html',
  styleUrls: ['./add-chapter-list.component.css']
})
export class AddChapterListComponent implements OnInit {
  panelOpenState: boolean;
  @Input() formation: FormationSend;
  @Output() sendRequest = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log('ng int of add chapter was executed ');
    console.log(this.formation);
  }

  addEmptyCour(chapter: ChapterSend) {
    var cour : CoursSend = new CoursSend('new Cours' , '', null , null);
   chapter.cour.push(cour);
  }
  removeChapter(chapter: ChapterSend) {
    this.formation.chapter = this.formation.chapter.filter(c => c !== chapter);
  }
  addEmptyChapter() {
    var cour : CoursSend = new CoursSend('new cours','',null,null);
    var chapter = new ChapterSend('', [] , null);
    chapter.cour.push(cour);
    console.log('add empty chapter ws executed ');
    console.log(chapter);
    console.log(this.formation);
    this.formation.chapter.push(chapter);

  }

  courselected (cour: CoursSend) {
    console.log(cour);
    this.sendRequest.emit(cour);
  }
}
