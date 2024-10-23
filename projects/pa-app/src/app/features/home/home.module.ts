import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {NgxPermissionsModule} from "ngx-permissions";
import {SharedModule} from "../../shared/shared.module";
import {SearchFormComponent} from "./components/search-form/search-form.component";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";


@NgModule({
  declarations: [
    HomePageComponent,
    SearchFormComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        NgxPermissionsModule,
        SharedModule,
        FormsModule,
        DropdownModule
    ]
})
export class HomeModule {

  constructor() {
    console.log('HomeModule Loaded');
  }
}
