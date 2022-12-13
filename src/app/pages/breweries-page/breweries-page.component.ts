import {ChangeDetectionStrategy, Component, Input, OnInit, ViewChild} from '@angular/core';
import {IBrewery} from "../../shared/models/brewery";
import {BreweryService} from "../../shared/services/brewery.service";
import {ModalService} from "../../shared/services/modal.service";
import {debounce, Observable, Subscription, timer} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-breweries-page',
  templateUrl: './breweries-page.component.html',
  styleUrls: ['./breweries-page.component.less']
})
export class BreweriesPageComponent {
  public title = 'Breweries List'
  public loading = false
  public selectBrewery: IBrewery | null = null
  public search: string = '';

  public searchControl = new FormControl();

  index = 0;
  perPage!: number;
  length!: number;

  constructor(
    public breweryService: BreweryService,
    public modalService: ModalService
  ) { }

  goToPage(index: number): void {
    this.index = index;
    this.loading = true
    this.breweryService.getMeta()
    this.breweryService.getAll(this.index + 1, this.perPage).subscribe(() => {
      this.loading = false
    })
  }

  ngOnInit(): void {
    this.goToPage(this.index)
    this.breweryService.meta$.subscribe((value)=>{
      if(!value){
        return
      }

      this.perPage = parseInt(value.per_page)
      this.length = Math.ceil(parseInt(value.total)/parseInt(value.per_page))
    })

    this.searchControl.valueChanges.pipe(debounce(() => timer(300))).subscribe(value => {this.breweryService.searchBreweries(value)})
  }

  public setSelectBrewery(brewery: IBrewery) : void {
    this.selectBrewery = brewery
  }
}
