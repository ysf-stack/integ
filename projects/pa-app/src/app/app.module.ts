import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AuthModule, LogLevel} from "angular-auth-oidc-client";
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {NgxPermissionsModule} from "ngx-permissions";
import {environment} from "../environments/environment";
import { GraphQLModule } from './graphql.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CalendarModule} from "primeng/calendar";
import {TagModule} from "primeng/tag";
import {AvatarModule} from "primeng/avatar";
import {CardModule} from "primeng/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ChipModule} from "primeng/chip";
import {AccordionModule} from "primeng/accordion";
import {NgOptimizedImage} from "@angular/common";
import {RippleModule} from "primeng/ripple";
import {TabViewModule} from "primeng/tabview";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    AuthModule.forRoot({
      config: {
        authority: environment.authAuthority,
        redirectUrl: environment.authRedirectUrl,
        postLogoutRedirectUri: environment.authPostLogoutRedirectUri,
        clientId: environment.authClientId,
        scope: 'openid profile email offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
        autoUserInfo: false,
        silentRenewTimeoutInSeconds: 10
      }
    }),
    NgxPermissionsModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    TagModule,
    AvatarModule,
    CardModule,
    FlexLayoutModule,
    ChipModule,
    NgOptimizedImage,
    AccordionModule,
    RippleModule,
    TabViewModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [
    //  { provide: AbstractSecurityStorage, useClass: CustomStorageService },  // Remplacer le stockage par défaut
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
