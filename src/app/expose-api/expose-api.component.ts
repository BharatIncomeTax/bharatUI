import { Component, OnInit, Renderer2 } from '@angular/core';
import {interestTableInstrumentRequest, interestTableInstrumentResponse, interestSpecifiedPeriodRequest} from '../sampleJSON/apiJson';

@Component({
  selector: 'app-expose-api',
  templateUrl: './expose-api.component.html',
  styleUrls: ['./expose-api.component.css'],
})
export class ExposeApiComponent implements OnInit {

  toggleSideNavBar: boolean = true;
  viewInfo: boolean = false;
  sampleJsonRequest: any = [];
  sampleJsonResponse: any = [];
  public optionId: string;
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {   
  }

  toggleSideNav() {
    this.toggleSidebar();
  }

  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    this.renderer.addClass(sidebar, 'active');
    if (this.toggleSideNavBar) {
      this.renderer.addClass(sidebar, 'active');
      this.toggleSideNavBar = false;
    } else {
      this.renderer.removeClass(sidebar, 'active');
      this.toggleSideNavBar = true;      
    }
  }

  showComponent(optionId: any) {
    this.optionId = optionId;
    if(this.optionId === 'interestTableInstrument') {
      this.sampleJsonRequest = [interestTableInstrumentRequest];
      this.sampleJsonResponse = [interestTableInstrumentResponse];
      this.viewInfo = true;
    } else if(this.optionId === 'interestOnSpecifiedPeriods') {
      this.sampleJsonRequest = []; 
      this.sampleJsonResponse = interestSpecifiedPeriodRequest;
      this.viewInfo = true;
    }
    else {
      this.sampleJsonRequest = [];
      this.sampleJsonResponse = [];
      this.viewInfo = false;
    }
  }

}
