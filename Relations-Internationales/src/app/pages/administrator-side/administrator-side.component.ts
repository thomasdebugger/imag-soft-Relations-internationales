import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Student } from 'src/app/models/student';
import { MatTableDataSource, MatPaginator, MatDialogConfig, MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { AddStudentDialogComponent } from 'src/app/components/add-element-dialog/add-student-dialog/add-student-dialog.component';
import { StudentService } from 'src/app/services/back/student.service';
import { DailyTopicsService } from 'src/app/services/back/daily-topics.service';
import { DailyTopic } from 'src/app/models/daily-topic';

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
  private dailyTopics: { idStudent: string, dailyTopics: DailyTopic[] }[] = [];
  private checkedStudents: string[];

  constructor(private readonly router: Router,
    private readonly dialog: MatDialog,
    private readonly dailyTopicService: DailyTopicsService,
    private readonly studentService: StudentService,
    private readonly activatedRoute: ActivatedRoute) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  logs: { idPerson: string; type: string };

  ngOnInit() {
    this.areDisplayArchived = false;
    this.archivedStudents = [];
    this.nonArchivedStudents = [];
    this.checkedStudents = [];
    this.initStudentsLists();

    this.setDataSource();
    this.displayedColumns = ['Signal', 'Name', 'University', 'Last connection', 'Entrant/Leaving', 'OpenInNew', 'SelectRow'];
    this.dataSource.paginator = this.paginator;

    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.logs = { idPerson: queryParams.idPerson, type: 'administrator' };
    });
  }

  initStudentsLists(): void {
    this.studentsInput.forEach(student => {
      student.getIsArchived() === 'true' ? this.archivedStudents.push(student) : this.nonArchivedStudents.push(student);

      this.dailyTopicService.getDailyTopicsByStudent(student.getIdPerson())
        .subscribe(result => {
          const dailyTopicByStudent = { idStudent: student.getIdPerson(), dailyTopics: [] };
          result['dailyTopics'].forEach(dailyTopic => dailyTopicByStudent.dailyTopics.push(dailyTopic));
          this.dailyTopics.push(dailyTopicByStudent);
        });

    });
  }

  getDailyTopicsByStudent(idPerson: string) {
    this.dailyTopics.forEach(dailyTopic => {
      if (dailyTopic.idStudent === idPerson) {
        return dailyTopic;
      }
    });
  }

  archiveStudents(): void {
    if (this.areDisplayArchived) {
      console.log('Desarchive function clicked.');
    } else {
      console.log('Archive function clicked.');
    }
  }

  displayArchivedStudents() {
    this.areDisplayArchived = !this.areDisplayArchived;
    this.setDataSource();
  }

  addStudent() {
    let dialogRef = null;
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.autoFocus = true;
    matDialogConfig.width = '60%';

    dialogRef = this.dialog.open(AddStudentDialogComponent, matDialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Student dialog closed : ', result);
      this.studentService.addStudent(result).subscribe((newStudent) => {
        this.nonArchivedStudents.push(new Student(newStudent['Student'][0]));
        this.setDataSource();
      },
        err => {
          console.log(err);
        });
    });
  }

  setDataSource(): void {
    if (this.areDisplayArchived) {
      this.dataSource = new MatTableDataSource<Student>(this.archivedStudents);
    } else {
      this.dataSource = new MatTableDataSource<Student>(this.nonArchivedStudents);
    }
  }

  goToStudentDetailsPage(studentId: string): void {
    this.router.navigate(['student-details/' + studentId], { queryParams: this.logs });
  }

  checkStudent(personId: string): void {
    if (this.checkedStudents.indexOf(personId) !== -1) {
      this.checkedStudents.splice(this.checkedStudents.indexOf(personId), 1);
    } else {
      this.checkedStudents.push(personId);
    }
  }
}
