import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor() { }
  images: any;

  public ngOnInit(): void {
  }

  dislayvideo(id: number) {
console.log(id )


  }
}
