import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetSearchTxtService } from '../services/get-search-txt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public searchText: any;
  public mockData: any;
  constructor(private router: Router, private getSearchTextService: GetSearchTxtService ) { 

  }

  ngOnInit(): void {
  }

  routeToSearch() {
    // if(this.searchText=='' || this.searchText == undefined) {
    if(false) {
      alert("Plese enter text to search");
    }else {
      this.router.navigateByUrl('/search');
      this.getSearchTextService.searchedText = this.searchText;
      // this.getSearchTextService.getSearchResult(this.mockData);
    }
  }

}
