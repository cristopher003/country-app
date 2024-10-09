import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy{
 


  private dbouncer:Subject<string>=new Subject<string>();
  private dbouncedSuscription?:Subscription;

  @Input()
  public placeholder: string = "buscar"

  @Input()
  public initialValue: string = ""

  @Output()
  public onValue = new EventEmitter<string>();

    
  ngOnInit(): void {
    this.dbouncedSuscription=
    this.dbouncer.pipe(
      debounceTime(3000)
    ).
    subscribe(value=>{
      this.onValue.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.dbouncedSuscription?.unsubscribe();
  }

  handlerEnter(value: string) {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string) {
    this.dbouncer.next(searchTerm);
  }

}
