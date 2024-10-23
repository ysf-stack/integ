import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    debugger
    this.authService.checkAuth().subscribe({
      next: ({isAuthenticated}) => {
        if (isAuthenticated) {
          this.authService.loadUserPermissions();
          this.authService.getUserInfo().subscribe(res => {
            console.log(res);
          });
          this.router.navigate(['/home']);
        } else {
          console.error('Échec de l\'authentification');
          this.authService.login();
        }
      },
      error: (error) => {
        console.error('Erreur lors du retour de Keycloak', error);
        this.authService.login();
      },
      complete: () => {
        console.log('Processus d\'authentification terminé');
      }
    });
  }
}
