import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Course } from 'src/app/models/course';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-add-course-dialog',
  templateUrl: './add-course-dialog.component.html',
  styleUrls: ['./add-course-dialog.component.css']
})
export class AddCourseDialogComponent implements OnInit {

  private teachersToSelect = ['Teacher 1', 'Teacher 2', 'Teacher 3'];
  private name: string;
  private description: string;
  private ects: number;
  private teachers: string[];
  private student: Student;

  constructor(private dialogRef: MatDialogRef<AddCourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public injectedStudent: Student) { }

  ngOnInit() {
    this.student = this.injectedStudent;
  }

  createCourse(): void {
    const teacherToReturn = [];
    this.teachers.forEach(teacher => {
      // Get the teachers
    });

    this.dialogRef.close(new Course(null, this.name, this.description, this.ects, teacherToReturn, this.student));
  }

}
