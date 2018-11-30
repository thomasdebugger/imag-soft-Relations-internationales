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

  teachersToSelect = ['Teacher 1', 'Teacher 2', 'Teacher 3'];
  name: string;
  description: string;
  ects: number;
  teachers: string[];
  student: Student;

  isNameValid: boolean;
  isEctsValid: boolean;
  isTeachersValid: boolean;
  isFormValid: boolean;

  constructor(private dialogRef: MatDialogRef<AddCourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public injectedStudent: Student) { }

  ngOnInit() {
    this.student = this.injectedStudent;
    this.isFormValid = true;
  }

  createCourse(): void {
    if (this.checkForm()) {
      const teacherToReturn = [];
      this.teachers.forEach(teacher => {
        // Get the teachers
      });

      this.dialogRef.close(new Course(null, this.name, this.description, this.ects, teacherToReturn, this.student));
    }
  }

  checkForm(): boolean {
    this.isFormValid = true;

    if (this.name && this.name.length > 0) {
      this.isNameValid = true;
    } else {
      this.isNameValid = false;
      this.isFormValid = false;
    }

    if (this.ects) {
      this.isEctsValid = true;
    } else {
      this.isEctsValid = false;
      this.isFormValid = false;
    }

    if (this.teachers && this.teachers.length > 0) {
      this.isTeachersValid = true;
    } else {
      this.isTeachersValid = false;
      this.isFormValid = false;
    }

    return this.isFormValid;
  }

}
