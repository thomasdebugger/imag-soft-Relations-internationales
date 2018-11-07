import { Persona } from './../models/persona';
import { Person } from './../models/person';
import { TableDataSource } from 'angular4-material-table';
import { Component, OnInit, EventEmitter } from '@angular/core';
import {Input,Output} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  constructor() { }

  displayedColumns = ['name', 'age', 'actionsColumn'];

  @Input() personList = [ 
    { name: 'Mark', age: 15 },
    { name: 'Brad', age: 50 },
    ] ;
  @Output() personListChange = new EventEmitter<Persona[]>();

  dataSource: TableDataSource<Persona>;
    
  ngOnInit() {
    this.dataSource = new TableDataSource<any>(this.personList, Persona);

    this.dataSource.datasourceSubject.subscribe(personList => this.personListChange.emit(personList));
  }

}
