import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
//import { PatternValidator } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
//import {Component} from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'material';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
 
  dataSource = new MatTableDataSource(ELEMENT_DATA);
 @ViewChild(MatSort) sort: MatSort;
 ngAfterViewInit()
 {
   this.dataSource.sort=this.sort;
 }

constructor(private snackBar: MatSnackBar){}

openSnackBar(message,action){
  this.snackBar.open(message,action);
//aUTO COMPLETE options: string[]=['Angular','React','Vue'];
  //showSpinner = false;
// opened=true;

 // loadData()
 // {
  //  this.showSpinner= true;
    //setTimeout(() => {
    //this.showSpinner = false;
  // }, 5000);
  }
 
  
}
