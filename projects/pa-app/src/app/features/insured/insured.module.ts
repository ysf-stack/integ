import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InsuredRoutingModule} from './insured-routing.module';
import {ListInsuredPageComponent} from './pages/list-insured-page/list-insured-page.component';
import { InsuredDetailsPageComponent } from './pages/insured-details-page/insured-details-page.component';
import {NgxPermissionsModule} from "ngx-permissions";
import {SharedModule} from "../../shared/shared.module";
import {InsuredSummaryComponent} from "./components/insured-summary/insured-summary.component";
import {PersonalDataComponent} from "./components/personal-data/personal-data.component";
import {TabViewModule} from "primeng/tabview";
import {AccordionModule} from "primeng/accordion";
import {TagModule} from "primeng/tag";
import {ButtonModule} from "primeng/button";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    InsuredSummaryComponent,
    PersonalDataComponent,
    ListInsuredPageComponent,
    InsuredDetailsPageComponent
  ],
  imports: [
    CommonModule,
    InsuredRoutingModule,
    NgxPermissionsModule,
    SharedModule,
    TabViewModule,
    AccordionModule,
    TagModule,
    ButtonModule,
    FlexLayoutModule
  ]
})
export class InsuredModule {
}
