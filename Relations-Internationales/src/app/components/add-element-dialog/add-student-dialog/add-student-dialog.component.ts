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
  private lastName: string;
  private emailAddress: string;
  private phoneNumber: string;
  private university: string;
  private isEntrant: boolean;
  private birthDate: Date;

  constructor(private dialogRef: MatDialogRef<AddStudentDialogComponent>) { }

  ngOnInit() {
  }

  createDailyTopic(): void {
    this.dialogRef.close(new Student({
      idPerson: null,
      emailAddress: this.emailAddress,
      firstNAme: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      lastConnexion: null,
      phoneNumber: this.phoneNumber,
      university: this.university,
      isEntrant: this.isEntrant || false,
      isArchived: false,
      isLearningAgreementValid: {},
      courses: [],
      contacts: []
    }));
  }

}
