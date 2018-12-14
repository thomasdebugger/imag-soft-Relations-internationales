import { Component, OnInit, Inject } from '@angular/core';
import { Student } from 'src/app/models/student';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-send-email-dialog',
  templateUrl: './send-email-dialog.component.html',
  styleUrls: ['./send-email-dialog.component.css']
})
export class SendEmailDialogComponent implements OnInit {

  object: string;
  body: string;
  student: Student;

  constructor(private dialogRef: MatDialogRef<SendEmailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public injectedStudent: Student) { }

  ngOnInit() {
    this.object = '';
    this.body = '';
    this.student = this.injectedStudent;
  }

  sendEmail(): void {
    this.dialogRef.close({ object: this.object, body: this.body, email: this.student.getEmailAddress() });
  }

}
