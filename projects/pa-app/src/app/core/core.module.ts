import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpResponseInterceptor} from "./auth/interceptors/http-response.interceptor";
import {InternalServerErrorComponent} from "./errors/components/internal-server-error/internal-server-error.component";
import {HttpRequestInterceptor} from "./auth/interceptors/http-request.interceptor";
import {AuthCallbackComponent} from './auth/components/auth-callback/auth-callback.component';
import {ForbiddenComponent} from './errors/components/forbidden/forbidden.component';
import {RouterLink} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {NotFoundComponent} from "./errors/components/not-found/not-found.component";
import {UnavailableServiceComponent} from "./errors/components/unavailable-service/unavailable-service.component";


@NgModule({
  declarations: [
    AuthCallbackComponent,
    ForbiddenComponent,
    NotFoundComponent,
    UnavailableServiceComponent,
    InternalServerErrorComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    SharedModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    }
  ],
  exports: [InternalServerErrorComponent, AuthCallbackComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
