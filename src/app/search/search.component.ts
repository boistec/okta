import { Subject } from 'rxjs/Rx';
import { Person, SearchService } from '../services/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'boistec-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query$ = new Subject<string>();
  searchResults:Array<Person>

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getAll().subscribe(
      data => { this.searchResults = data; },
      error => console.log(error)
    );
  }

  search(): void {    
    this.searchService.search(this.query$).subscribe(
      data => { this.searchResults = data; },
      error => console.log(error)
    );    
  }

}
