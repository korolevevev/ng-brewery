import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiTextfieldControllerModule, TuiLoaderModule, TuiSvgModule
} from "@taiga-ui/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BreweriesPageComponent} from './pages/breweries-page/breweries-page.component';
import {BreweryInfoComponent} from './shared/components/brewery-info/brewery-info.component';
import {BreweryComponent} from './shared/components/brewery/brewery.component';
import {ModalComponent} from './shared/components/modal/modal.component';
import {NavigationComponent} from './shared/components/navigation/navigation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import { LeafletMapComponent } from './shared/components/leaflet-map/leaflet-map.component';
import {TuiInputCountModule, TuiPaginationModule, TuiTabsModule} from "@taiga-ui/kit";

@NgModule({
  declarations: [
    AppComponent,
    BreweriesPageComponent,
    BreweryInfoComponent,
    BreweryComponent,
    ModalComponent,
    NavigationComponent,
    LandingPageComponent,
    LeafletMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    LeafletModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiPaginationModule,
    TuiTextfieldControllerModule,
    TuiLoaderModule,
    TuiTabsModule,
    TuiSvgModule,
    TuiInputCountModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
