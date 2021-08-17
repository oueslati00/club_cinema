import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from 'ngx-file-drop';
import {VideoDkikaRequest, VideoDkikaResposne, VideoDkikaService} from '../../_service/video-dkika.service';
import {datepickerAnimation} from 'ngx-bootstrap/datepicker/datepicker-animations';
@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})
export class AddvideoComponent implements OnInit {
  VideoDkikaRequest: VideoDkikaRequest = new VideoDkikaRequest();
  public files: NgxFileDropEntry[] = [];
 VideodkiakList: VideoDkikaResposne[] = [];
  constructor(private videoDkikaservice: VideoDkikaService) {
  }
  ngOnInit() {
    this.videoDkikaservice.getVideoDkikaList().subscribe(
      data => {
        this.VideodkiakList = data;
      }, error => {
        console.log(error);
      }
    );
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
          this.VideoDkikaRequest.file = file;
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
  addVideo() {
    // validate request
    console.log(this.VideoDkikaRequest);
    // add this request to database
    this.videoDkikaservice.uploadVideo(this.VideoDkikaRequest.file).subscribe(
      data => {
             this.VideoDkikaRequest.video = data;
             this.videoDkikaservice.addvideoDescription(this.VideoDkikaRequest).subscribe(
               data1 => {
                 console.log('add video done with sucess');
                 console.log(data1);
                 this.ngOnInit();
               }
             );
             }, erro => {
        console.log(erro);
      }
    );

  }
}
