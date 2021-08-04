import {Component, Input, OnInit} from '@angular/core';
import {FormationDisplay} from '../../../_service/user.service';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {

  @Input() formation: FormationDisplay;
  constructor() { }

  ngOnInit(): void {
  }

}
