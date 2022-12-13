import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IBrewery} from "../models/brewery";
import {BehaviorSubject, delay, Observable, retry, tap} from "rxjs";
import {IMeta} from "../models/meta";

@Injectable({
  providedIn: 'root'
})
export class BreweryService {
  constructor(
    private http: HttpClient,
  ) {
  }

  public allInitBreweries: IBrewery[] = []
  public breweries: IBrewery[] = []
  private meta: BehaviorSubject<IMeta | null> = new BehaviorSubject<IMeta | null>(null);

  public get meta$(): Observable<IMeta | null>{
    return this.meta.asObservable();
  }

  getAll(page: number, perPage: number): Observable<IBrewery[]> {
    return this.http.get<IBrewery[]>(`https://api.openbrewerydb.org/breweries?page=${page}&per_page=${perPage}`).pipe(
      retry(3),
      tap(breweries => { this.breweries = breweries }),
    )
  }

  getMeta(): void {
    this.http.get<IMeta>(`https://api.openbrewerydb.org/breweries/meta`).subscribe(meta => { this.meta.next(meta) })
  }

  searchBreweries(value: string): void {
    if (!value){
      this.breweries = this.allInitBreweries;
      return;
    }

     this.http.get<IBrewery[]>(`https://api.openbrewerydb.org/breweries/autocomplete?query=${value}`).subscribe(
      breweries => { this.breweries = breweries
      }
    )
  }
}
