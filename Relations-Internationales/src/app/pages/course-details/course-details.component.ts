import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SimulatorService } from 'src/app/services/simulator/simulator.service';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { Student } from 'src/app/models/student';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AddPollDialogComponent } from 'src/app/components/add-element-dialog/add-poll-dialog/add-poll-dialog.component';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  constructor(private readonly router: Router,
    private readonly dialog: MatDialog) { }

  @Input() selectedStudent: Student;
  @Input() selectedCourse: Course;
  @Output() backToStudent: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {
  }

  goToStudent(): void {
    this.backToStudent.emit();
  }

  displayAddPollDialog(): void {
    let dialogRef = null;
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.autoFocus = true;
    matDialogConfig.width = '60%';
    matDialogConfig.data = this.selectedCourse;

    console.log('Poll dialog opened.');
    dialogRef = this.dialog.open(AddPollDialogComponent, matDialogConfig);
    dialogRef.afterClosed().subscribe(result => console.log('Poll dialog closed : ', result));
  }
}
