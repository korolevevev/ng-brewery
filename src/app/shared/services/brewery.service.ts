import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IBrewery} from "../models/brewery";
import {delay, Observable, retry, tap} from "rxjs";
import {IMeta} from "../models/meta";

@Injectable({
  providedIn: 'root'
})
export class BreweryService {
  constructor(
    private http: HttpClient,
  ) {
  }

  public breweries: IBrewery[] = []
  public meta: Object

  getAll(page: number, perPage: number): Observable<IBrewery[]> {
    return this.http.get<IBrewery[]>(`https://api.openbrewerydb.org/breweries?page=${page}&per_page=${perPage}`).pipe(
      retry(3),
      tap(breweries => { this.breweries = breweries }),
    )
  }

  getMeta(): Observable<IMeta> {
    return this.http.get<IMeta>(`https://api.openbrewerydb.org/breweries/meta`).pipe(
      retry(3),
      tap(meta => { this.meta = meta }),
    )
  }

  searchBreweries(): Observable<IBrewery[]> {
    return this.http.get<IBrewery[]>('https://api.openbrewerydb.org/breweries/search?query={search}').pipe(
      retry(3),
      tap(breweries => { this.breweries = breweries })
    )
  }
}
