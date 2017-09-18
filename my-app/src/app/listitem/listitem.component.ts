import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss']
})
export class ListitemComponent implements OnInit {
  collection: Item[];
  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
    this.collection = this._CollectionService.collection;
  }

  changeState(item: Item, state: number) {
    item.state = state;
  }
}
