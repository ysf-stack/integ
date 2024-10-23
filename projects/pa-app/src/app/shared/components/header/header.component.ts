import {Component, HostListener, OnInit} from '@angular/core';
import {AuthService} from "../../../core/auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userFullName: string = 'Youssef ELKARKOURI';
  userAcronym: string = 'YEL';
  appsMenu: { label: string; description: string; command: () => void }[] | undefined;
  isAppsMenuOpen = false;
  isProfileMenuOpen = false;
  isUserFound = true;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    const firstName = 'Unknown';
    const lastName = 'Unknown';
    this.userFullName = `${firstName} ${lastName}`;
    this.userAcronym =  'UUN';
    this.isUserFound = true;
    /*const userInfo: any = this.authService.getUserInfo();
    userInfo.subscribe((data: any) => {
      if (data) {
        const firstName = data['name'] || 'Unknown';
        const lastName = data['family_name'] || 'Unknown';
        this.userFullName = `${firstName} ${lastName}`;
        this.userAcronym = this.getAcronym(this.userFullName);
        this.isUserFound = true;
      }
    });*/

    this.appsMenu = [
      {
        label: 'SIAMO',
        description: 'Traitement des rejets de dossiers et vérifier les compléments manquants.',
        command: () => {
          this.openApp('SIAMO');
        }
      },
      {
        label: 'GEDDAMO', command: () => {
          this.openApp('GEDDAMO');
        }, description: 'Gestion des réexpéditions de dossiers.'
      },
      {
        label: 'TNS Web', command: () => {
          this.openApp('TNS Web');
        }, description: 'Vérification de l\'état des contrats des TNS.'
      },
      {
        label: 'TADAMON', command: () => {
          this.openApp('TADAMON');
        }, description: 'Vérification de l\'état des contrats des TNS.'
      },
      {
        label: 'TRAÇABILITÉ', command: () => {
          this.openApp('TRAÇABILITÉ');
        }, description: 'Vérification de l\'état des contrats des TNS.'
      },
      {
        label: 'COMARCHIVE', command: () => {
          this.openApp('COMARCHIVE');
        }, description: 'Vérification de l\'état des contrats des TNS.'
      }
    ];
  }


  toggleProfileMenu() {
    this.isAppsMenuOpen = false;
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  toggleAppsMenu() {
    this.isProfileMenuOpen = false;
    this.isAppsMenuOpen = !this.isAppsMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (!target.closest('.header__item')) {
      this.isAppsMenuOpen = false;
      this.isProfileMenuOpen = false;
    }
  }


  logout() {
    /**this.authService.checkKeycloakAvailability().pipe().subscribe(result => {
      if (result) {
        this.authService.logOutServer().subscribe(() => {
          console.log("Logged off");
        });
      }
      else {
        // this.authService.logOutLocal();
        console.log("Logged off local");
        this.router.navigate(['/unavailable-service']);
      }
    });
*/
  }

  openApp(appName: string) {
    console.log(`Ouverture de l'application ${appName}`);
  }
}
