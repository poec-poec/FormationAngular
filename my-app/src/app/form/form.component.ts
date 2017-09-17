import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Item } from '../item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() add: EventEmitter<Item> = new EventEmitter;
  form: FormGroup;
  nameCtrl: FormControl;
  referenceCtrl: FormControl;
  stateCtrl: FormControl;
  constructor(fb: FormBuilder) {
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
  }

  addItem() {
    this.add.emit(this.form.value);
    this.reset();
  }

  reset() {
    this.nameCtrl.setValue('');
    this.referenceCtrl.setValue('');
    this.stateCtrl.setValue(0);
  }
}
