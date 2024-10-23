import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DocumentNode } from 'graphql';

interface Insured {
  id: string;
  initials: string;
  name: string;
  occupation: string;
  category: string;
  immatNumber: string;
  cin: string;
  living: string;
  active: string;
  birthDate: string;
  gender: string;
  lastEmployer: string;
  nationality: string;
  familyStatus: string;
  childrenCount: number;
  individualNumber: number;
  aldAlc: string;
  registrationDate: string;
  affiliationNumber: string;
  companyName: string;
  companyManager: string;
  address: string;
}

interface GetInsuredData {
  Insured: Insured;  // Changed from 'insured' to 'Insured'
}

interface GetInsuredVars {
  id: string;
}

const GET_INSURED: DocumentNode = gql`
  query GetInsured($id: ID!) {
    Insured(id: $id) {  # Changed from 'insured' to 'Insured'
      id
      initials
      name
      occupation
      category
      immatNumber
      cin
      living
      active
      birthDate
      gender
      lastEmployer
      nationality
      familyStatus
      childrenCount
      individualNumber
      aldAlc
      registrationDate
      affiliationNumber
      companyName
      companyManager
      address
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class InsuredService {
  constructor(private apollo: Apollo) {}

  getInsured(id: string): Observable<Insured> {
    return this.apollo
      .watchQuery<GetInsuredData>({
        query: GET_INSURED,
        variables: { id }
      })
      .valueChanges
      .pipe(
        map(result => result.data.Insured)  // Changed from 'insured' to 'Insured'
      );
  }
}
