import { Component, OnInit } from '@angular/core';
import { GetSearchTxtService } from 'src/app/services/get-search-txt.service';

@Component({
  selector: 'app-old-regime',
  templateUrl: './old-regime.component.html',
  styleUrls: ['./old-regime.component.css']
})
export class OldRegimeComponent implements OnInit {

  public config;
  public oldRegimeData=[];
  public dataLoaded = false;

  constructor(public getSearchTextService: GetSearchTxtService) { }

  ngOnInit(): void {
    let a = JSON.stringify({
      "0" : 
        {
        "income":Number(this.getSearchTextService.searchedText),
        "status":"R",
        "entity":"I",
        "identity":"M",
        "regime":"OLD"
        },
      "record_count" : 1
    });
    this.getSearchTextService.getTaxData(a).then(x => {
      // this.oldRegimeData = JSON.stringify(this.getSearchTextService.searchResult.Output[0][0]); 
      this.oldRegimeData.push(this.getSearchTextService.searchResult.Output[0][0]); 
      this.config = this.getSearchTextService.getHeaders(this.oldRegimeData);
      this.dataLoaded = true;
    });
  }

}
