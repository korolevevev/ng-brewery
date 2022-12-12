import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BreweriesPageComponent} from "./pages/breweries-page/breweries-page.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'breweries', component: BreweriesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
