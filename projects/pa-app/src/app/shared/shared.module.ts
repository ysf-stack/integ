import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingSpinnerComponent} from "./components/loading-spinner/loading-spinner.component";
import {LoadingService} from "./services/loading.service";
import {HeaderComponent} from "./components/header/header.component";


@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    LoadingService
  ],
  exports: [LoadingSpinnerComponent, HeaderComponent]
})
export class SharedModule {
}
