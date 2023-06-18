import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewRegimeComponent } from './micro-box/new-regime/new-regime.component';
import { OldRegimeComponent } from './micro-box/old-regime/old-regime.component';
import { SearchComponent } from './search/search.component';
import { TaxCalculationComponent } from './tax-calculation/tax-calculation.component';
import { DownloadExcelComponent } from './download-excel/download-excel.component';
import { ExposeApiComponent } from './expose-api/expose-api.component';

// const routes: Routes = [];

const routes: Routes = [  
                          { path:'', component: HomeComponent },
                          // { path:'', component: DownloadExcelComponent },   
                          { path:'search', component: SearchComponent },  
                          { path:'oldregime', component: OldRegimeComponent },  
                          { path:'newregime', component: NewRegimeComponent },  
                          { path:'taxCalculation', component: TaxCalculationComponent },  
                          { path:'download', component: DownloadExcelComponent },
                          { path:'apis', component: ExposeApiComponent }
                        ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
