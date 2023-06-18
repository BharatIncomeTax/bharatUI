import { Component, OnInit } from '@angular/core';
import { GetSearchTxtService } from 'src/app/services/get-search-txt.service';

@Component({
  selector: 'app-new-regime',
  templateUrl: './new-regime.component.html',
  styleUrls: ['./new-regime.component.css']
})
export class NewRegimeComponent implements OnInit {

  public config;
  public newRegimeData=[];
  public dataLoaded=false;

  constructor(public getSearchTextService: GetSearchTxtService) { }

  ngOnInit(): void {

    let a = JSON.stringify({
      "0" : 
        {
        "income":Number(this.getSearchTextService.searchedText),
        "status":"R",
        "entity":"I",
        "identity":"M",
        "regime":"NEW"
        },
      "record_count" : 1
    });
    this.getSearchTextService.getTaxData(a).then( x => {
      this.newRegimeData.push(this.getSearchTextService.searchResult.Output[0][0]); 
      this.config = this.getSearchTextService.getHeaders(this.newRegimeData);
      this.dataLoaded = true;
    });
  }

}
