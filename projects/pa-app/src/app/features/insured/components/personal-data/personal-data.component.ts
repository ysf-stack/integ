import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {InsuredService} from "../../services/insured.service";

interface PersonalDataItem {
  label: string;
  value: string;
}

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {
  personalData: PersonalDataItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private insuredService: InsuredService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
     //TODO this.loadPersonalData(id);
     this.loadPersonalData("1");
    });
  }

  loadPersonalData(id: string) {
    this.insuredService.getInsured(id).subscribe(
      data => {
        this.personalData = [
          { label: "Identifiant caisse étrangère", value: "-" },
          { label: "Nationalité", value: data.nationality },
          { label: "Situation familiale", value: data.familyStatus },
          { label: "Nombre d'enfant", value: data.childrenCount.toString() },
          { label: "N° Individu", value: data.individualNumber.toString() },
          { label: "Date de naissance", value: data.birthDate },
          { label: "ALD / ALC", value: data.aldAlc },
          { label: "Date d'immatriculation", value: data.registrationDate },
          { label: "N° d'affiliation", value: data.affiliationNumber },
          { label: "Raison sociale", value: data.companyName },
          { label: "Gérant entreprise", value: data.companyManager },
          { label: "Adresse de l'assuré", value: data.address },
        ];
      },
      error => {
        console.error('Error fetching personal data', error);
      }
    );
  }

  onEditClick(event: MouseEvent) {
    event.stopPropagation();
    console.log('Edit button clicked');
  }
}
