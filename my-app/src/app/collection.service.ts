import { Injectable } from '@angular/core';

import { Item } from './item';

@Injectable()
export class CollectionService {
  collection: Item[];
  constructor() {
    this.collection = [
      new Item({reference: '1234', name: 'Julien', state: 0}),
      new Item({reference: '1548', name: 'Justine', state: 1}),
      new Item({reference: '5689', name: 'Christophe', state: 2})
    ];
  }

  addItemToCollection(item: Item) {
    this.collection.push(item);
  }
}
