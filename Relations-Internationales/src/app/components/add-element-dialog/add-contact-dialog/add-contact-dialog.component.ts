import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Student } from 'src/app/models/student';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-add-contact-dialog',
  templateUrl: './add-contact-dialog.component.html',
  styleUrls: ['./add-contact-dialog.component.css']
})
export class AddContactDialogComponent implements OnInit {

  private firstName: string;
  private lastName: string;
  private student: Student;
  private emailAddress: string;
  private phoneNumber: string;
  private affiliation: string;
  private description: string;

  constructor(private dialogRef: MatDialogRef<AddContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public injectedStudent: Student) { }

  ngOnInit() {
    this.student = this.injectedStudent;
  }

  createContact(): void {
    this.dialogRef.close(new Contact(null, this.student, this.emailAddress, this.firstName, this.lastName,
      this.phoneNumber, this.affiliation, this.description));
  }

}
