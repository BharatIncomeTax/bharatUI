import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient, HttpEventType} from '@angular/common/http';
import { saveAs } from 'file-saver';
import { map } from 'rxjs/operators';
import taxConfig from './tax-config';
import { EditableTableComponent } from '../Components/editable-table/editable-table.component';
import {downloadTaxCalculatorExcel, downloadTaxCalculatorExcelFilename} from '../Utils/URLConstants';
import mockData from './mockData';


@Component({
  selector: 'app-tax-calculation',
  templateUrl: './tax-calculation.component.html',
  styleUrls: ['./tax-calculation.component.css']
})
export class TaxCalculationComponent implements OnInit {

  selectedFile: File = null;
  progress: number = null;
  public tableConfig: any = null;
  public tableData: any = [];

  @ViewChild('editabletable') editabletable: EditableTableComponent;


  ngOnInit(): void {
    this.tableConfig = taxConfig;
    // this.tableData = mockData;
  }

  constructor(private http: HttpClient) { }

  tableEvent(event: any) {
    event;
  }

  rowData(event: any) {
    this.collectTableData(event);
    event;
  }

  calculate() {
    this.editabletable.checkIfAllFormFieldIsFilled() ? alert("Fill All Details") : alert("Development in Progress")
  }

  collectTableData(event) {
    this.tableData.push(event.rowData);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post('/api/upload', fd, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(event.loaded / event.total * 100);
      } else if (event.type === HttpEventType.Response) {
        console.log(event.body);
      }
    });
  }

  downloadTaxCalculatorExcel() {
    this.http.post(downloadTaxCalculatorExcel, { filename: downloadTaxCalculatorExcelFilename }, { responseType: 'blob' })
      .pipe(
        map(response => {
          saveAs(response, downloadTaxCalculatorExcelFilename);
        })
      ).subscribe();
  }

  clearFileSelection() {
    const fileInput = document.getElementById('file') as HTMLInputElement;
    fileInput.value = null;
    this.progress = null;
  }
}
