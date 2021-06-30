import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from 'ngx-file-drop';
import {FormationService} from '../../layouts/admin-layout/_service/formation.service';
import { BsModalRef, BsModalService }from  'ngx-bootstrap/modal/';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-addcour',
  templateUrl: './addcour.component.html',
  styleUrls: ['./addcour.component.css']
})
export class AddcourComponent implements OnInit  {
  @Input() lessonItd: number;
  list: any[] = [];
  itemform;
  public event: EventEmitter<any> = new EventEmitter();
  constructor(private formBuilder: FormBuilder, public bsModalRef: BsModalRef ) {}
  ngOnInit() {
    this.itemform = this.formBuilder.group({
      name: ''
    });
    console.log(this.list);
  }

  saveToList(form) {
    if(form.value){
      this.triggerEvent(form.value.name);
      this.bsModalRef.hide();
    }

  }

  triggerEvent(item: string) {
    this.event.emit({ data: item , res:200  });
  }
  public files: NgxFileDropEntry[] = [];
  activeModal: any;

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }


}
