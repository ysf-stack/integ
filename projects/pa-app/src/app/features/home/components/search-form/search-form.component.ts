import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  scrollHeight: string = '300px';
  searchOptions: { name: string, code: string }[] = [];
  selectedSearchOption: { name: string, code: string };
  insuredId: string = '';
  notFound: boolean = false;

  constructor(private router: Router) {
    this.searchOptions = [
      {name: 'N° d’immatriculation', code: 'IMMAT_NUMBER'},
      {name: 'N° de caisse  étrangère', code: 'CAISSE_ETRANGERE_NUMBER'},
      {name: 'N° CIN', code: 'CIN'},
      {name: 'N° de carte séjour', code: 'CARTE_SEJOUR_NUMBER'},
      {name: 'N° passeport', code: 'PASSPORT_NUMBER'},
      {name: 'N° CIN conjoint(e)', code: 'CIN_CONJOINT'}
    ];

    this.selectedSearchOption = this.searchOptions[0];
  }

  search() {
    this.notFound = false;

    const mockData = ['11', '67890', '54321'];

    if (!this.insuredId) {
      // todo: add msg 'Veuillez saisir un identifiant'
      return;
    }
    console.log('Cat: ', this.selectedSearchOption);

    if (!mockData.includes(this.insuredId)) {
      this.notFound = true;
    } else {
      console.log('Assuré trouvé :', this.insuredId);
      this.router.navigate(['/insured/details/11'])
    }
  }

  onInputChange() {
    this.notFound = false;
  }
}
