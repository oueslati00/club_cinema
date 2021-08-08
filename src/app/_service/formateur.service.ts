import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {chapter} from './Models/formation';
const FORMATION_ADD_API = 'http://localhost:9097/api/formateur/formation';

export class FormationSend {
  private _id: number;
  private _formateurId: number;
  private _name: string;
  private _chapter: ChapterSend[];
  private _firstDate: Date;
  private _finalDate: Date;
  private _description: string;

  constructor(formateurId: number, name: string, chapter: ChapterSend[],
              firstDate: Date, finalDate: Date, description: string, id: number) {
    this._id = id;
    this._formateurId = formateurId;
    this._name = name;
    this._chapter = chapter;
    this._firstDate = firstDate;
    this._finalDate = finalDate;
    this._description = description;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get formateurId(): number {
    return this._formateurId;
  }

  set formateurId(value: number) {
    this._formateurId = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get chapter(): ChapterSend[] {
    return this._chapter;
  }

  set chapter(value: ChapterSend[]) {
    this._chapter = value;
  }

  get firstDate(): Date {
    return this._firstDate;
  }

  set firstDate(value: Date) {
    this._firstDate = value;
  }

  get finalDate(): Date {
    return this._finalDate;
  }

  set finalDate(value: Date) {
    this._finalDate = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
export class ChapterSend {
  private _id: number;
 private _name: string;
 private _cour: CoursSend[];

  constructor(name: string, cour: CoursSend[], id: number) {
    this._name = name;
    this._cour = cour;
    this._id = id;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get cour(): CoursSend[] {
    return this._cour;
  }

  set cour(value: CoursSend[]) {
    this._cour = value;
  }
}
export class CoursSend {
  private _name: string;
  private _description: string;
  private _file: File;
  private _id: number;

  constructor(name: string, description: string, file: File, id: number) {
    this._name = name;
    this._description = description;
    this._file = file;
    this._id = id;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get file(): File {
    return this._file;
  }

  set file(value: File) {
    this._file = value;
  }
}

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  formation: FormationSend;
  constructor(private http: HttpClient) { }

  sendformation(formationSend: FormationSend): Observable<FormationSend> {
    return this.http.post<FormationSend>(FORMATION_ADD_API, formationSend);
  }

  createEmptyFormation(): FormationSend {
    var chapterListEmpty: ChapterSend[] = new Array();
    var coursListEmpty : CoursSend[] = new Array();
    var cours : CoursSend = new CoursSend('new cour',null,null,null);
    coursListEmpty.push(cours);
    var chapter = new ChapterSend(null, coursListEmpty, null);
    chapterListEmpty.push(chapter);

    this.formation = new FormationSend(null, null, chapterListEmpty, null, null, null, null);
    return this.formation;
  }
}
