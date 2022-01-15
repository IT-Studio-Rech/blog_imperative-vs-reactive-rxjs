import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../shared/interfaces/customer.interface';

@Component({
  selector: 'app-imperative-pattern',
  templateUrl: './imperative-pattern.component.html',
  styleUrls: ['./imperative-pattern.component.scss']
})
export class ImperativePatternComponent {

  private _customers: Customer[] = [
    { name: 'Peter Griffin', projectCount: 15 },
    { name: 'Max Mustermann', projectCount: 40 },
    { name: 'Start your demo business GmbH', projectCount: 125 },
    { name: 'IT Studio Rech', projectCount: 99 },
  ];
  private _rawCustomers$: Observable<Customer[]> = of(this._customers);
  public customersOfTheYear: Customer[] = [];

  constructor() {
    this._rawCustomers$
      .subscribe((rawCustomers) => {
        this.customersOfTheYear = rawCustomers.filter(rawCustomer => rawCustomer.projectCount > 50);
      });
  }

}
