import { Component, OnInit } from '@angular/core';
import {RfxParallaxService} from 'rfx-parallax';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  images: any;
  constructor(private rfxParallaxService: RfxParallaxService) { }

  public ngOnInit(): void {
    this.rfxParallaxService.initListeners();
  }

  dislayvideo(id: number) {
console.log(id )


  }
}