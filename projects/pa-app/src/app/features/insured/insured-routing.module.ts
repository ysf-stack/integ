import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListInsuredPageComponent} from "./pages/list-insured-page/list-insured-page.component";
import {InsuredDetailsPageComponent} from "./pages/insured-details-page/insured-details-page.component";

const routes: Routes = [
  {path: '', component: ListInsuredPageComponent},
  {path: 'details/:id', component: InsuredDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuredRoutingModule {
}
