import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss']
})
export class ListitemComponent implements OnInit {
  collection: Item[];
  constructor(public _AppComponent: AppComponent) { }

  ngOnInit() {
    this.collection = this._AppComponent.collection;
  }

  changeState(item: Item, state: number) {
    item.state = state;
  }
}
