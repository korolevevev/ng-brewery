import {ChangeDetectionStrategy, Component, Input, OnInit, ViewChild} from '@angular/core';
import {IBrewery} from "../../shared/models/brewery";
import {BreweryService} from "../../shared/services/brewery.service";
import {ModalService} from "../../shared/services/modal.service";
import {IMeta} from "../../shared/models/meta";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-breweries-page',
  templateUrl: './breweries-page.component.html',
  styleUrls: ['./breweries-page.component.less']
})
export class BreweriesPageComponent {
  title = 'Breweries List'
  loading = false
  public selectBrewery: IBrewery | null = null
  public search: string = ''

  meta: Object

  total = 8163
  index = 0;
  perPage = 20;
  length = Math.ceil(this.total/this.perPage)

  constructor(
    public breweryService: BreweryService,
    public modalService: ModalService
  ) { }

  goToPage(index: number): void {
    this.index = index;
    this.loading = true
    this.breweryService.getMeta().subscribe()
    this.meta = this.breweryService.meta
    console.log(this.meta)
    this.breweryService.getAll(this.index, this.perPage).subscribe(() => {
      this.loading = false
    })
  }

  ngOnInit(): void {
    this.goToPage(this.index)
  }

  public setSelectBrewery(brewery: IBrewery) : void {
    this.selectBrewery = brewery
  }

  onSearchClick(search: string): void {
    this.loading = true
    this.breweryService.searchBreweries().subscribe(() => {
      this.loading = false
    })
  }
}
