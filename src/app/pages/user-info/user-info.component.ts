import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TokenStorageService} from '../../layouts/auth-layout/_service/token-storage.service';
import {UserService} from '../../_service/user.service';
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from 'ngx-file-drop';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  imagaValide: boolean;
  id: any;
  user: any = {};
  image: File;
  imageUrl: any;
  public files: NgxFileDropEntry[] = [];
  constructor(private token: TokenStorageService, private userService: UserService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    console.log(' this componenet was executed');
    this.id = this.token.getUser().id;
    console.log( 'id from ng init ' + this.id);
    this.userService.getUserInformation(this.id).subscribe(
      data => {
        console.log(data);
        this.user = data;
      }, error => {
    console.log(error);
  },
    );
    this.userService.streamImageByUserId(this.id).subscribe(
      data => {
        const url = URL.createObjectURL(data);
        this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        console.log('image was loaded ');
      }, error => {
        console.log(error);
      }
    );
  }
  update() {
    console.log(this.image);
    this.userService.addImageByidUser(this.image, this.id).subscribe(
      data => {
        this.imagaValide = true;
      }, error => {
        console.log('add image by user Id with error');
        console.log(error);
      }
    );
    console.log('image validate ' + this.imagaValide);
    this.userService.updateInforamtionById(this.user, this.id).subscribe(
      data => {
        console.log(data);
      }, error => {
      console.log(error);
    }
    );

   window.location.reload();
  }
  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
          this.image = file;
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }




}
