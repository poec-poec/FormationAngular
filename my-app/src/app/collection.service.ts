import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Item } from './item';

@Injectable()
export class CollectionService {
  collection: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.collection = db.list('/collection');
  }

  addItemToCollection(item: Item) {
    this.collection.push(item);
  }
}
