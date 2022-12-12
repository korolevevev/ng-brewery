import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {IBrewery} from "../../models/brewery";

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.sass']
})
export class BreweryComponent {
  @Input() brewery: IBrewery

  @Output() clickEvent: EventEmitter<IBrewery> = new EventEmitter();

  constructor(
    public modalService: ModalService
  ) {
  }

  logId() {
    console.log('ok')
    this.clickEvent.emit(this.brewery)
    this.modalService.open()
  }
}
