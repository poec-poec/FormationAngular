import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  collection: any;
  constructor() {

  }
  ngOnInit() {
    this.collection = [
      {reference: '1234', name: 'Julien', state: 0},
      {reference: '1548', name: 'Justine', state: 1},
      {reference: '5689', name: 'Christophe', state: 2}
    ]
  }

}
