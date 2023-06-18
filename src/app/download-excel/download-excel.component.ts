import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType} from '@angular/common/http';
import { saveAs } from 'file-saver';
import { map } from 'rxjs/operators';
import {downloadTaxCalculatorExcel, downloadTaxCalculatorExcelFilename} from '../Utils/URLConstants';

@Component({
  selector: 'app-download-excel',
  templateUrl: './download-excel.component.html',
  styleUrls: ['./download-excel.component.css']
})
export class DownloadExcelComponent implements OnInit {

  public taxCalculationText: String;
  constructor(private http: HttpClient) { }  
  ngOnInit(): void {
    this.taxCalculationText = "The Excel can be used for Income Tax Slab Split and Intrest Calculation for Cumulative Fixed Deposites, National Saving Certificate, Kisan Vikas Patra and Mahila Samman Saving Scheme."
  }

  downloadTaxCalculatorExcel() {
    this.http.post(downloadTaxCalculatorExcel, { filename: downloadTaxCalculatorExcelFilename }, { responseType: 'blob' })
      .pipe(
        map(response => {
          saveAs(response, downloadTaxCalculatorExcelFilename);
        })
      ).subscribe();
  }
}
