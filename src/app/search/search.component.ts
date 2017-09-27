import { Subject } from 'rxjs/Rx';
import { Person, SearchService } from '../services/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'boistec-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm$ = new Subject<string>();
  searchResults:Array<Person>

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getAll().subscribe(
      data => { this.searchResults = data; },
      error => console.log(error)
    );

    this.search();
  }

  search(): void {    
    this.searchService.search(this.searchTerm$)
      .subscribe(
        data => { this.searchResults = data; },
        error => console.log(error)
      );    
  }

}
