import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import editableConfig from './editableConfig'

@Component({
  selector: 'app-editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.css']
})
export class EditableTableComponent implements OnInit {

  @Input() tableConfig: any
  @Input() tableData: any

  @Output() event = new EventEmitter<any>();
  @Output() rowData = new EventEmitter<any>();

  private flag: boolean = true
  public disableDelete !: boolean;
  public disableClearAllData !: boolean;
  public rows = [];
  public mockHeader;
  public config;
  public col: Array<number> = [];
  public disableEdit;
  public isAnyRowSelected;
  public editLabel;
  public serialNumber = 0;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // https://meet.google.com/zsi-nhgu-pve?pli=1
    this.tableConfig.unshift(editableConfig[0]);
    this.config = this.getHeaders(this.tableConfig); //table config   
    // this.config.unshift(editableConfig[0].name);
    // this.createDynamicCells();
    // this.rows = this.tableData ? this.tableData : [];
    if(this.tableData) {
      for(let i=0; i< this.tableData.length; i++) {
        this.addRow(this.tableData[i]);
      }
    }
  }

  ngAfterContentChecked() {
    this.disableDelete = this.rows.length <= 0 ? true : false;
    this.disableClearAllData = this.rows.length <= 0 ? true : false;
    this.disableEdit = this.rows.length<=0 ? true : false;
  }

  getHeaders(tableConfig: any) {
    let headers: string[] = [];
    if(tableConfig) {
      tableConfig.forEach((value) => {
        headers.push(value.name ? value.name : '');
      })
    }
    return headers;
  }

  //this method may be required in future
  createDynamicCells() {
    let columnCount = Object.keys(this.config).length;
    this.config.forEach(x => {
      this.col.push(x);
    })
  }

  addRow(incomingRowData?) {
    const fieldConfig = {}; 
    for (let i = 0; i < this.tableConfig.length; i++) {
      const field = this.tableConfig[i].model ? this.tableConfig[i].model : '';
      const fieldValue = '';
      const validators = this.getValidators(this.tableConfig[i].required ? this.tableConfig[i].required : false); // Set validators as required
      fieldConfig[field] = [fieldValue, validators];
    }
    const userFormGroup = this.formBuilder.group(fieldConfig);
    let newUser = {
      editable: true,
      formGroup: userFormGroup
    };    
    this.tableConfig.forEach((field) => {
      if(field.model == 'sr no') {
        this.serialNumber++;
        newUser[field.model] = this.serialNumber;
      } else {
        newUser[field.model] = incomingRowData ? incomingRowData[field.model] : '';
      }      
    });
  
    this.rows.push(newUser);
  }

  getValidators(required: boolean, extraValidators?: any) {
    const validators = [];
    if (required) {
      validators.push(Validators.required);
    }
    if (extraValidators) {
      validators.push(extraValidators);
    }
    return validators;
  }

  toggleEditable() {
    this.isAnyRowSelected = this.rows.filter(x => x.selected == true).length;
    for (let i = 0; i < this.rows.length; i++) {
      if(this.isAnyRowSelected > 0) { //Toggle particular row        
        if (this.rows[i].selected) {
          this.rows[i].editable = !this.rows[i].editable;
        }
      } else { //Toggle all row
        this.rows[i].editable = !this.rows[i].editable;
      }       
    }
  }
  
  deleteSelectedRows() {
    for (let i = this.rows.length - 1; i >= 0; i--) {
      if (this.rows[i].selected) {
        this.rows.splice(i, 1);
      }
    }
  }

  clearData() {
    this.rows = [];
  }

  isFieldInvalidAndTouched(column, row, i): boolean {
    const field = row.formGroup.get(column);
    return field.invalid && field.touched && field.errors?.required;;    
  }
  
  markFieldAstouched(column, row, i) {
    row.formGroup.get(column).markAsTouched(); // Manually mark the field as touched
  }

  handleInput(column, row, i) {
    let entity = {
      column: column,
      row: row,
      index: i
    }
    this.setFormFieldValue(column, row, i); //row contain formGroup
    if (row.formGroup.valid) {  
      const data = { rowData: row.formGroup.value, index: i };
      this.rowData.emit(data);  
    } else {
      this.event.emit(entity);
    }
  }

  setFormFieldValue(column, row, i) {
    row.formGroup.get(column).setValue(row[column]);
  }

  checkIfAllFormFieldIsFilled() {
    let isError = [];
    this.rows.forEach(x => {
      if(x.formGroup.valid == false) {
        isError.push(false);
      }
    })
    //true: error
    //false: not error
    return isError.length ? true : false;
  }
  
}
