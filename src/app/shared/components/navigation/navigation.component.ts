import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiAlertService} from "@taiga-ui/core";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  activeItemIndex = 0;

  constructor(
    @Inject(TuiAlertService)
    private readonly alertService: TuiAlertService,
  ) {}

  onClick(item: string): void {
    this.alertService.open(item).subscribe();
  }
}
