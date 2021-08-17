import { Component, OnInit } from '@angular/core';
import {VideoDkikaResposne, VideoDkikaService} from '../../_service/video-dkika.service';
@Component({
  selector: 'app-displaylistvideo',
  templateUrl: './displaylistvideo.component.html',
  styleUrls: ['./displaylistvideo.component.css']
})
export class DisplaylistvideoComponent implements OnInit {
videoDkikaList: VideoDkikaResposne[] = [];
  constructor(private videodkikaservice: VideoDkikaService) { }

  ngOnInit(): void {
    console.log('videodkikaService Information');
     this.videodkikaservice.getVideoDkikaList().subscribe(
       data => {
         this.videoDkikaList = data;
         console.log(this.videoDkikaList);
         this.videoDkikaList = this.videodkikaservice.addVideoList(data);
         console.log(this.videoDkikaList);
       }, error => {
         console.log(error);


       }
     )
  }


}
