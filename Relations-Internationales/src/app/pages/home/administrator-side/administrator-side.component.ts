import { Component, OnInit, ViewChild } from '@angular/core';
import { SimulatorService } from 'src/app/services/simulator/simulator.service';
import { Student } from 'src/app/models/student';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-administrator-side',
  templateUrl: './administrator-side.component.html',
  styleUrls: ['./administrator-side.component.css']
})
export class AdministratorSideComponent implements OnInit {

  private students: Student[];
  private dataSource: MatTableDataSource<Student>;
  private displayedColumns: string[];

  constructor(private simulator: SimulatorService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.students = this.simulator.getStudents();

    this.displayedColumns = ['Signal', 'Name', 'University', 'Last connection', 'Entrant/Leaving', 'OpenInNew'];
    this.dataSource = new MatTableDataSource<Student>(this.students);
    this.dataSource.paginator = this.paginator;
  }

}
