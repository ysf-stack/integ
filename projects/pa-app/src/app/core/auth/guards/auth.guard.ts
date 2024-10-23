import {inject} from '@angular/core';
import {CanActivateFn} from '@angular/router';
import {map} from 'rxjs/operators';
import {LoadingService} from '../../../shared/services/loading.service';
import {AuthService} from "../services/auth.service";
import {NgxPermissionsService} from "ngx-permissions";

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const loadingService = inject(LoadingService);

  loadingService.setLoading(true);

  return authService.checkAuth().pipe(
    map(({isAuthenticated}) => {
      loadingService.setLoading(false);
      if (!isAuthenticated) {
        authService.login();
        return false;
      }
      if (!authService.arePermissionsLoaded()) {
        authService.loadUserPermissions();
      }
      return true;
    })
  );
};
