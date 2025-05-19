import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Suman","rani", "suman123@.com", 50000),
    new SalesPerson("Jonii","sama", "jonii.sama@.com", 40000),
    new SalesPerson("Aman","Sama", "aman.sama@.com", 90000),
    new SalesPerson("Simran","Kamboj", "simran.kamaboj@.com", 60000),
    new SalesPerson("Simar","Rani", "simar.rani@.com", 90000),
    new SalesPerson("Anikat","sharama", "anikat@.com", 60000),
      new SalesPerson("Nitish","Kumar", "nitish@.com", 40000),
       new SalesPerson("Digna","Patel", "digna@.com", 50000),

 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
