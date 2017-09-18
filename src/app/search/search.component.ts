import { Person, SearchService } from '../services/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'boistec-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string;
  searchResults:Array<Person>

  constructor(private serachService: SearchService) { }

  ngOnInit() {
  }

  search(): void {
    /*
    this.searchService.getAll().subscribe(
      data => { this.searchResults = data; },
      error => console.log(error)
    );
    */
  }

}
