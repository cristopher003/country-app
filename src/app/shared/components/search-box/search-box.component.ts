import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Input()
 public placeholder:string="buscar"

 @Output()  onValue=new EventEmitter<string>();

 handlerEnter(value:string){
  this.onValue.emit(value);
 }

}
