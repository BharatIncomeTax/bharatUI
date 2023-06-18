import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetSearchTxtService } from '../services/get-search-txt.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchText;
  constructor(private router: Router, public getSearchTextService: GetSearchTxtService ) { }

  ngOnInit(): void {
    this.searchText = this.getSearchTextService.searchedText;
  }

  ngAfterContentChecked() {
    this.getSearchTextService.searchedText = this.searchText ;
  } 

  getOldRegime() { 
    this.router.navigateByUrl('/oldregime');
  }

  getNewRegime() {
    this.router.navigateByUrl('/newregime');
  }

}