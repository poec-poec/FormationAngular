import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { CollectionService } from '../collection.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss']
})
export class ListitemComponent implements OnInit {
  collection: FirebaseListObservable<any[]>;
  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
    this.collection = this._CollectionService.collection;
  }

  changeState(item: any, state: number) {
    item.state = state;
    this.collection.update(item.$key, item);
  }
}
