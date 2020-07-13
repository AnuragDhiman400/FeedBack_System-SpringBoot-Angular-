import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
 
  currentRate = 5;
  star = 1;
  rate1 = 1;
  constructor(config: NgbRatingConfig) {
    config.max = 5;
   }

  ngOnInit(): void {
    console.log(this.currentRate);
    this.getrating();
  }
   getrating()
   { 
      console.log(this.rate1);
     }


}
