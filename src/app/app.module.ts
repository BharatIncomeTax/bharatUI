import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NewRegimeComponent } from './micro-box/new-regime/new-regime.component';
import { OldRegimeComponent } from './micro-box/old-regime/old-regime.component';
import { TaxCalculationComponent } from './tax-calculation/tax-calculation.component';
import { EditableTableComponent } from './Components/editable-table/editable-table.component';
import { DownloadExcelComponent } from './download-excel/download-excel.component';
import { ExposeApiComponent } from './expose-api/expose-api.component';
import { ApiInfoComponent } from './expose-api/api-info/api-info.component';




@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    HomeComponent,
    OldRegimeComponent,
    NewRegimeComponent,
    TaxCalculationComponent,
    EditableTableComponent,
    DownloadExcelComponent,
    ExposeApiComponent,
    ApiInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
