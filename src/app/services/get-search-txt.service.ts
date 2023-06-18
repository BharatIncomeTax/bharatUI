import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetSearchTxtService {

  public searchedText : any;
  public searchResult : any;

  constructor(public http: HttpClient) { }

  getHeaders(mockData: any) {
    let headers: string[] = [];
    if(mockData) {
      mockData.forEach((value) => {
        Object.keys(value).forEach((key) => {
          if(!headers.find((header) => header == key)){
            headers.push(key)
          }
        })
      })
    }
    return headers;
  }

  // getHeaders(mockData: any) {
  //   let headers: string[] = [];
  //   if(mockData) {
  //       Object.keys(mockData).forEach((key) => {
  //         if(!headers.find((header) => header == key)){
  //           headers.push(key)
  //         }
  //     })
  //   }
  //   return headers;
  // }

  async getTaxData(apiData: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'Authorization':'authkey',
        'content-type': 'application/json'      
      })
    };
    
    await this.http.post("http://bharatincometax.in/kb/itax/taxcalc/aa", apiData, httpOptions).toPromise().then(res => {
      this.searchResult = res;
    },error => {
      this.searchResult = error.status;
    });
  }
}
