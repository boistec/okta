import { SearchComponent } from '../search/search.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Person, Address } from './../services/search.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit, OnDestroy {

  person: Person
  editAddress: Address
  editName: string;
  editPhone: string;  

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private search: SearchComponent) { }

  ngOnInit() {
  }

  ngOnDestroy() {    
  }

}
