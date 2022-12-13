import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter, take} from "rxjs";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent implements OnInit{
  activeItemIndex = 0;

  private itemMap = ['/', '/breweries']

  constructor(
    private readonly router: Router,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.router.events.pipe(filter(event=> event instanceof NavigationEnd), take(1))
      .subscribe((event) => {
        this.activeItemIndex = this.itemMap.indexOf((event as NavigationEnd).url)
        this.changeDetectorRef.detectChanges()
      })
  }

  onClick(item: string): void {
    void this.router.navigate([item]);
  }
}
