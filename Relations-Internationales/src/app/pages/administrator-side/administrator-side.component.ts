import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Student } from 'src/app/models/student';
import { MatTableDataSource, MatPaginator, MatDialogConfig, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { AddStudentDialogComponent } from 'src/app/components/add-element-dialog/add-student-dialog/add-student-dialog.component';
import { StudentService } from 'src/app/services/back/student.service';

@Component({
  selector: 'app-administrator-side',
  templateUrl: './administrator-side.component.html',
  styleUrls: ['./administrator-side.component.css']
})
export class AdministratorSideComponent implements OnInit {

  @Input() studentsInput: Student[] = [];

  private archivedStudents: Student[];
  private nonArchivedStudents: Student[];
  private dataSource: MatTableDataSource<Student>;
  private displayedColumns: string[];
  private areDisplayArchived: boolean;

  constructor(private router: Router, private dialog: MatDialog) { }

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
    console.log(this.studentsInput);
    this.studentsInput.forEach(student => {
      student.getIsArchived() ? this.archivedStudents.push(student) : this.nonArchivedStudents.push(student);
    });




    // this.simulator.getStudents().forEach(student => {
    //   if (student.getIsArchived()) {
    //     this.archivedStudents.push(student);
    //   } else {
    //     this.nonArchivedStudents.push(student);
    //   }
    // });
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
    let dialogRef = null;
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.autoFocus = true;
    matDialogConfig.width = '60%';

    dialogRef = this.dialog.open(AddStudentDialogComponent, matDialogConfig);
    dialogRef.afterClosed().subscribe(result => console.log('Course dialog closed : ', result));
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
