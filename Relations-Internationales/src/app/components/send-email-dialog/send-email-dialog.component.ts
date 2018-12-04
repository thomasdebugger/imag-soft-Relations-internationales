import { Component, OnInit, Inject } from '@angular/core';
import { Student } from 'src/app/models/student';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AddContactDialogComponent } from '../add-element-dialog/add-contact-dialog/add-contact-dialog.component';
import { PersonService } from 'src/app/services/back/person.service';

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
    @Inject(MAT_DIALOG_DATA) public injectedStudent: Student,
    private readonly personService: PersonService) { }

  ngOnInit() {
    this.object = '';
    this.body = '';
    this.student = this.injectedStudent;
  }

  sendEmail(): void {
    this.personService.getPerson(this.student.getIdStudent()).subscribe(result => {
      this.dialogRef.close({ object: this.object, body: this.body, email: result['emailAddress'] });
    });
  }

}
