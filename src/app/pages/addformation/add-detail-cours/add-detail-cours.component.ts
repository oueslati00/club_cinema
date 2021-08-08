import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Chapter, Cours, FormationDisplay} from '../../../_service/user.service';
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from 'ngx-file-drop';
import {CoursSend} from '../../../_service/formateur.service';

@Component({
  selector: 'app-add-detail-cours',
  templateUrl: './add-detail-cours.component.html',
  styleUrls: ['./add-detail-cours.component.css']
})
export class AddDetailCoursComponent implements OnInit, OnChanges{

  public files: NgxFileDropEntry[] = [];
  file: File ;
  filename = '';
  @Input() cours: CoursSend;
  constructor() { }
  ngOnInit(): void {

  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log( file);
          this.file = file;
          this.cours.file = file;
          this.filename = file.name;

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }

    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if ( changes.cours.currentValue.file === null) {
      this.filename = '';
    } else {
      console.log(changes.cours.currentValue.file.name);
      this.filename = changes.cours.currentValue.file.name;
    }
  }



}
