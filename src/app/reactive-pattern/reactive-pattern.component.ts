import { Component } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Customer } from '../shared/interfaces/customer.interface';

@Component({
  selector: 'app-reactive-pattern',
  templateUrl: './reactive-pattern.component.html',
  styleUrls: ['./reactive-pattern.component.scss']
})
export class ReactivePatternComponent {

  private _customers: Customer[] = [
    { name: 'Peter Griffin', projectCount: 15 },
    { name: 'Max Mustermann', projectCount: 40 },
    { name: 'Start your demo business GmbH', projectCount: 125 },
    { name: 'IT Studio Rech', projectCount: 99 },
  ];
  private _rawCustomers$: Observable<Customer[]> = of(this._customers);
  public customersOfTheYear$: Observable<Customer[]>;

  constructor() {
    this. customersOfTheYear$ = this._rawCustomers$
      .pipe(
        map(rawCustomers => rawCustomers.filter(rawCustomer => rawCustomer.projectCount > 50))
      );
  }

}
