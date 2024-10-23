import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {InsuredService} from "../../services/insured.service";

@Component({
  selector: 'app-insured-summary',
  templateUrl: './insured-summary.component.html',
  styleUrls: ['./insured-summary.component.css']
})
export class InsuredSummaryComponent implements OnInit {
  initials: string = '';
  name: string = '';
  occupation: string = '';
  category: string = '';
  immatNumber: string = '';
  cin: string = '';
  living: string = '';
  active: string = '';
  birthDate: string = '';
  gender: string = '';
  lastEmployer: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private insuredService: InsuredService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.loadInsuredData(id);
    });
  }

  loadInsuredData(id: string) {
    //TODO this.insuredService.getInsured(id).subscribe(
    this.insuredService.getInsured("1").subscribe(
      data => {
        if (data) {
          this.initials = this.getInitials(data.name);
          this.name = data.name || '';
          this.occupation = data.occupation || '';
          this.category = data.category || '';
          this.immatNumber = data.immatNumber || '';
          this.cin = data.cin || '';
          this.living = data.living || '';
          this.active = data.active || '';
          this.birthDate = data.birthDate || '';
          this.gender = data.gender || '';
          this.lastEmployer = data.lastEmployer || '';
        } else {
          console.error('No data returned for insured');
        }
      },
      error => {
        console.error('Error fetching insured data', error);
      }
    );
  }

  getInitials(name: string): string {
    if (!name) return '';
    const initials = name.split(' ').map(n => n[0]).join('');
    return initials.toUpperCase();
  }

  close() {
    this.router.navigate(['/home']);
  }
}
