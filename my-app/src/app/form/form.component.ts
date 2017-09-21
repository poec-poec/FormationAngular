import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from '../modal/modal.component';
import { Item } from '../item';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  nameCtrl: FormControl;
  referenceCtrl: FormControl;
  stateCtrl: FormControl;

  constructor(fb: FormBuilder, private _CollectionService: CollectionService, private modalService: NgbModal) {
    this.nameCtrl = fb.control('', [
      Validators.required, Validators.minLength(2)
    ]);
    this.referenceCtrl = fb.control('', [
      Validators.required, Validators.minLength(4)
    ]);
    this.stateCtrl = fb.control(0);
    this.form = fb.group({
      name: this.nameCtrl,
      reference: this.referenceCtrl,
      state: this.stateCtrl
    });
  }

  ngOnInit() {
  }

  addItem() {
    this._CollectionService.addItemToCollection(this.form.value);
    this.reset();
    this.open();
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.msg = 'Votre commande a bien été ajoutée';
  }

  reset() {
    this.form.reset();
    // this.nameCtrl.setValue('');
    // this.referenceCtrl.setValue('');
    this.stateCtrl.setValue(0);
  }
}
