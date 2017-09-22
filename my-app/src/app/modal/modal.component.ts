import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() msg;
  constructor(public activeModal: NgbActiveModal, private _Router: Router) { }

  ngOnInit() {
  }

  close() {
    this.activeModal.close('Close click');
    this._Router.navigate(['list']);
  }

  dismiss() {
    this.activeModal.dismiss('Cross click');
  }
}
