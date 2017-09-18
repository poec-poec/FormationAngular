import { Injectable } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Item } from './item';
import { ModalComponent } from './modal/modal.component';

@Injectable()
export class CollectionService {
  collection: Item[];
  constructor(private modalService: NgbModal) {
    this.collection = [
      new Item({reference: '1234', name: 'Julien', state: 0}),
      new Item({reference: '1548', name: 'Justine', state: 1}),
      new Item({reference: '5689', name: 'Christophe', state: 2})
    ];
  }

  addItemToCollection(item: Item) {
    this.collection.push(item);
    this.open();
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.msg = 'Votre commande a bien été ajoutée';
  }
}
