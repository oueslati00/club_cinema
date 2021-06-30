import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {chapter, formation} from '../../Models/formation';
import {FormationService} from '../../layouts/admin-layout/_service/formation.service';



@Component({
  selector: 'app-addformation',
  templateUrl: './addformation.component.html',
  styleUrls: ['./addformation.component.css']
})
export class AddformationComponent implements OnInit {
  formation: formation;
  chapter: chapter;
  chap: chapter;

  constructor(private formationService: FormationService) {
   /* this.chapter = { id : 1, name: 'cdcdc' , cour : [] };
    this.formation = {id : 1, name: '' , FinalDate: '' , FirstDate: '' , chapter : []};*/
  this.formation = formationService.formation;
  }

  ngOnInit(): void {
  }


  onSubmitformateur(f: NgForm) {
    console.log(f.value);
  }

  onSubmitformation(f: NgForm) {
    console.log(f);
  }

  removebyId(id: number) {
    console.log(id);
    console.log(this.formation.chapter);
    this.formation.chapter = this.formation.chapter.filter(x => x.id !== id);
    console.log(this.formation.chapter);
  }

  addlesson() {
     this.chap = new chapter(this.formation.chapter.length + 1) ;
    console.log(this.chap);
    this.formation.chapter.push(this.chap);
  }
}
