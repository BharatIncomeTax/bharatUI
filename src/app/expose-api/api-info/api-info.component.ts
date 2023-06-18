import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {compoundingPeriod, principal, interestRate, startDate, endDate, type} from '../../Utils/iTaxConstants';
import {compoundingPeriodInfo, principalInfo, interestRateInfo, startDateInfo, endDateInfo, typeInfo} from '../../Utils/iTaxConstants';
import {instrumentNo, sliceNo, startDate1, endDate1, days, rate, amount, rowCount} from '../../Utils/iTaxConstants';
import {instrumentNoInfo, sliceNoInfo, startDate1Info, endDate1Info, daysInfo, rateInfo, amountInfo, rowCountInfo} from '../../Utils/iTaxConstants';
import {compoundingFlag, specifiedPeriodPrincipal, notionalPrincipal} from '../../Utils/iTaxConstants';
import {compoundingFlagInfo, specifiedPeriodPrincipalInfo, notionalPrincipalInfo} from '../../Utils/iTaxConstants';


@Component({
  selector: 'app-api-info',
  templateUrl: './api-info.component.html',
  styleUrls: ['./api-info.component.css']
})
export class ApiInfoComponent implements OnInit {

  @Input() optionId: any
  @Input() RequestTable: any
  @Input() ResponseTable: any
  @Output() sampleJson = new EventEmitter<any>();

  public reqParameters: Array<String> = [];
  public reqDescriptions: Array<String> = [];
  public resParameters: Array<String> = [];
  public resDescriptions: Array<String> = [];
  public reqJson: any;
  public resJson: any;

  public reqIntrestTableInstrumentParameters: Array<String> = [compoundingPeriod, principal, interestRate, startDate, endDate, type];
  public reqIntrestTableInstrumentDescriptions: Array<String> = [compoundingPeriodInfo,principalInfo, interestRateInfo, startDateInfo, endDateInfo, typeInfo];
  public resIntrestTableInstrumentParameters: Array<String> = [instrumentNo, sliceNo, startDate1, endDate1, days, rate, compoundingFlag, specifiedPeriodPrincipal, notionalPrincipal];
  public resIntrestTableInstrumentDescriptions: Array<String> = [instrumentNoInfo, sliceNoInfo, startDate1Info, endDate1Info, daysInfo, rateInfo, amountInfo, rowCountInfo];
  
  public reqIntrestSpecifiedPeriodParameters: Array<String> = [compoundingPeriod, principal, interestRate, startDate, endDate, type];
  public reqIntrestSpecifiedPeriodDescriptions: Array<String> = [compoundingPeriodInfo,principalInfo, interestRateInfo, startDateInfo, endDateInfo, typeInfo];
  public resIntrestSpecifiedPeriodParameters: Array<String> = [startDate1, endDate1, days, rate, amount, rowCount];
  public resIntrestSpecifiedPeriodDescriptions: Array<String> = [startDate1Info, endDate1Info, daysInfo, rateInfo, compoundingFlagInfo, specifiedPeriodPrincipalInfo, notionalPrincipalInfo];


  constructor() { }

  ngOnInit(): void {   
  }

  ngAfterContentChecked() {
    this.getOptionParamAndDescription(this.optionId); 
  }

  getOptionParamAndDescription(optionId) {
    if(optionId === 'interestTableInstrument') {
      if(this.RequestTable) {
        this.reqParameters = this.reqIntrestTableInstrumentParameters;
        this.reqDescriptions = this.reqIntrestTableInstrumentDescriptions;
      } 
      if(this.ResponseTable) {
        this.resParameters = this.resIntrestTableInstrumentParameters;
        this.resDescriptions = this.resIntrestTableInstrumentDescriptions;
      }
    } else if(optionId === 'interestOnSpecifiedPeriods') {
      if(this.RequestTable) {
        this.reqParameters = this.reqIntrestSpecifiedPeriodParameters;
        this.reqDescriptions = this.reqIntrestSpecifiedPeriodDescriptions;
      } 
      if(this.ResponseTable) {
        this.resParameters = this.resIntrestSpecifiedPeriodParameters;
        this.resDescriptions = this.resIntrestSpecifiedPeriodDescriptions;
      }
    } else {
      this.reqParameters = [];
      this.reqDescriptions = [];
    }

  }

}
