import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authGuard} from './core/auth/guards/auth.guard';
import {InternalServerErrorComponent} from "./core/errors/components/internal-server-error/internal-server-error.component";
import {AuthCallbackComponent} from "./core/auth/components/auth-callback/auth-callback.component";
import {ForbiddenComponent} from "./core/errors/components/forbidden/forbidden.component";
import {ngxPermissionsGuard} from "ngx-permissions";
import {UnavailableServiceComponent} from "./core/errors/components/unavailable-service/unavailable-service.component";
import {NotFoundComponent} from "./core/errors/components/not-found/not-found.component";

const routes: Routes = [
  {path: 'auth-callback', component: AuthCallbackComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
    /**canActivate: [authGuard, ngxPermissionsGuard],
    data: {
      permissions: {
        only: ['PA_ADMIN_ROLE', 'PA_AGENT_ROLE', 'PA_CRC_ROLE'],
        redirectTo: '/forbidden'
      }
    }*/
  },
  {
    path: 'insured',
    loadChildren: () => import('./features/insured/insured.module').then(m => m.InsuredModule),
    /**canActivate: [authGuard, ngxPermissionsGuard],
    data: {
      permissions: {
        only: ['PA_ADMIN_ROLE', 'PA_AGENT_ROLE', 'PA_CRC_ROLE'],
        redirectTo: '/forbidden'
      }
    }*/
  },
  {path: 'forbidden', component: ForbiddenComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'internal-server-error', component: InternalServerErrorComponent},
  {path: 'unavailable-service', component: UnavailableServiceComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
