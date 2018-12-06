import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.css']
})
export class AddStudentDialogComponent implements OnInit {

  private firstName: string;
  private emailAddress: string;
  private university: string;
  private isEntrant: number;
  private lastName: string;
  private phoneNumber: string;
  private birthDate: Date;

  constructor(private dialogRef: MatDialogRef<AddStudentDialogComponent>) { }

  ngOnInit() {
  }

  createStudent(): void {
    this.dialogRef.close(new Student({
      emailAddress: this.emailAddress,
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      lastConnection: null,
      phoneNumber: this.phoneNumber,
      university: this.university,
      isEntrant: this.isEntrant,
      isArchived: 0
    }));
  }

}
