import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private db: AngularFireDatabase) { }

  getCompanies() {
    return this.db.list('company').valueChanges;
  }
  addCompany(company) {
    this.db.list('company').push(company);
  }
  updateCompany(company) {
    this.db.list('company').push(company);
  }
}
