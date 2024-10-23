import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {NgxPermissionsService} from "ngx-permissions";
import {LoginResponse, OidcSecurityService} from "angular-auth-oidc-client";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private oidcSecurityService: OidcSecurityService,
              private permissionsService: NgxPermissionsService) {
  }

  public checkAuth(): Observable<LoginResponse> {
    return this.oidcSecurityService.checkAuth();
  }

  checkKeycloakAvailability(): Observable<boolean> {
    return this.http.get(environment.authAuthority).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  login(): void {
    this.oidcSecurityService.authorize();
  }

  getAccessToken(): Observable<string> {
    return this.oidcSecurityService.getAccessToken();
  }

  logOutServer(): Observable<any> {
    return this.oidcSecurityService.logoff();
  }

  logOutLocal(): void {
    this.oidcSecurityService.logoffLocal();
  }

  getUserInfoFromServer(): Observable<any> {
    const userInfoEndpoint = environment.authAuthority + 'protocol/openid-connect/userinfo';
    return this.http.get(userInfoEndpoint);
  }

  getUserInfo(): Observable<any> {
    return this.oidcSecurityService.getUserData();
  }

  arePermissionsLoaded(): boolean {
    const loadedPermissions = this.permissionsService.getPermissions();
    return Object.keys(loadedPermissions).length > 0;
  }

  loadUserPermissions(): void {
    this.getAccessToken().subscribe(token => {
      if (token) {
        const decodedToken = this.decodeToken(token);
        const roles = this.extractRoles(decodedToken);
        this.permissionsService.loadPermissions(roles);
      }
    });
  }

  private decodeToken(token: string): any {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }

  private extractRoles(decodedToken: any): string[] {
    const realmRoles = decodedToken.realm_access?.roles || [];
    const clientRoles = decodedToken.resource_access?.[environment.authClientId]?.roles || [];
    return [...realmRoles, ...clientRoles];
  }
}
