import { Directive, Input, ElementRef, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: number;
  constructor(public _element: ElementRef, public _renderer: Renderer2) { }
  ngOnChanges() {
    // console.log(this.appState);
    const cssClass = `state-${this.appState}`;
    let text: string;
    const elementNode = this._element.nativeElement;
    switch (this.appState) {
      case 0:
        text = 'A livrer';
        break;
      case 1:
        text = 'En cours de livraison';
        break;
      case 2:
        text = 'Livrée';
        break;
      default:
        console.log(this.appState);
        break;
    }
    this._renderer.addClass(elementNode, cssClass);
    elementNode.innerHTML = text;
  }
}
