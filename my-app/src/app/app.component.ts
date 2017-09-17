import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from './modal/modal.component';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  collection: Item[];
  constructor(private modalService: NgbModal) {
  }
  ngOnInit() {
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
