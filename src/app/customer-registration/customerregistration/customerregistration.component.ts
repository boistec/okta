import { NgForm } from '@angular/forms/src/directives';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerregistration',
  templateUrl: './customerregistration.component.html',
  styleUrls: ['./customerregistration.component.css']
})
export class CustomerregistrationComponent implements OnInit {

  public package = {
    min:50,
    max: 100
  }

  categories =[
    {"id":1, "name":"categoría 1"}
   ,{"id":2, "name":"categoría 2"}
   ,{"id":3, "name":"categoría 3"}
  ]
  
  constructor() { }

  ngOnInit() {
  }

  addCustomer(form) {

  }

  changeValue() {
    this.package.min = 5;
    this.package.max = 10;
  }
}
