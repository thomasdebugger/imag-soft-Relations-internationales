import { Component, OnInit, ViewChild } from '@angular/core';
import { SimulatorService } from 'src/app/services/simulator/simulator.service';
import { Student } from 'src/app/models/student';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrator-side',
  templateUrl: './administrator-side.component.html',
  styleUrls: ['./administrator-side.component.css']
})
export class AdministratorSideComponent implements OnInit {

  private archivedStudents: Student[];
  private nonArchivedStudents: Student[];
  private dataSource: MatTableDataSource<Student>;
  private displayedColumns: string[];
  private areDisplayArchived: boolean;

  constructor(private simulator: SimulatorService, private router: Router) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.areDisplayArchived = false;
    this.archivedStudents = [];
    this.nonArchivedStudents = [];
    this.initStudentsLists();

    this.setDataSource();
    this.displayedColumns = ['Signal', 'Name', 'University', 'Last connection', 'Entrant/Leaving', 'OpenInNew'];
    this.dataSource.paginator = this.paginator;
  }

  initStudentsLists(): void {
    this.simulator.getStudents().forEach(student => {
      if (student.getIsArchived()) {
        this.archivedStudents.push(student);
      } else {
        this.nonArchivedStudents.push(student);
      }
    });
  }

  archiveStudents(): void {
    console.log('Archive function clicked.');
  }

  displayArchivedStudents() {
    console.log('Display archived students function clicked.');
    this.areDisplayArchived = !this.areDisplayArchived;
    this.setDataSource();
  }

  addStudent() {
    console.log('Add student function clicked.');
  }

  setDataSource(): void {
    if (this.areDisplayArchived) {
      this.dataSource = new MatTableDataSource<Student>(this.archivedStudents);
    } else {
      this.dataSource = new MatTableDataSource<Student>(this.nonArchivedStudents);
    }
  }

  goToStudentDetailsPage(studentId: string): void {
    this.router.navigate(['student-details/' + studentId]);
  }
}
