import {Component, ElementRef, Input, OnInit, Sanitizer, ViewChild} from '@angular/core';
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from 'ngx-file-drop';
import {Cours, UserService} from '../../../_service/user.service';
import {DomSanitizer} from '@angular/platform-browser';
import {CompteRenduService} from '../../../_service/compte-rendu.service';


@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationDetailComponent implements OnInit {
  public files: NgxFileDropEntry[] = [];
  file: File;
  @Input() cours: Cours;
  video: any;
  constructor(private userservice: UserService, private sanitizer: DomSanitizer, private compteRenduService: CompteRenduService) { }

  ngOnInit(): void {
  this.getvideo(this.cours.id);
  }

  getvideo(courId: number): any {
    console.log(courId);
     this.userservice.streamVideoFormation(168).subscribe(
      data => {
        const url = URL.createObjectURL(data);
        this.video =  this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }, error => {
        console.log(error);
      }
    );
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
          this.compteRenduService.sendcompteRendu(file, 185, 10).subscribe(
            data => {
              console.log(data);
            }
          );
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }

    }
  }
}
