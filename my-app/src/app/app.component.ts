import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Item } from './item';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  collection: Item[];

  form: FormGroup;
  nameCtrl: FormControl;
  referenceCtrl: FormControl;
  stateCtrl: FormControl;

  constructor(fb: FormBuilder, private modalService: NgbModal) {
    // this.nameCtrl = fb.control('Chris'); // donne une valeur par defaut
    this.nameCtrl = fb.control('', [Validators.required, Validators.minLength(2)]);
    this.referenceCtrl = fb.control('', [Validators.required, Validators.minLength(4)]);
    this.stateCtrl = fb.control(0);
    this.form = fb.group({
      name: this.nameCtrl,
      reference: this.referenceCtrl,
      state: this.stateCtrl
    });
  }
  ngOnInit() {
    this.collection = [
      new Item({reference: '1234', name: 'Julien', state: 0}),
      new Item({reference: '1548', name: 'Justine', state: 1}),
      new Item({reference: '5689', name: 'Christophe', state: 2})
    ];
  }

  test() {
    // console.log(this.nameCtrl.valueChanges);
    console.log(this.form.get('name').value)
  }

  addItem(content) {
    this.collection.push(this.form.value);
    this.reset();
    this.open();
    // console.log(this.form.value);
  }

  reset() {
    this.nameCtrl.setValue('');
    this.referenceCtrl.setValue('');
    this.stateCtrl.setValue(0);
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.msg = 'Votre commande a bien été ajoutée';
  }
}
