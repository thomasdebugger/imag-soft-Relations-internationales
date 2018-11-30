import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Student } from 'src/app/models/student';
import { DailyTopic } from 'src/app/models/daily-topic';

@Component({
  selector: 'app-add-daily-topic-dialog',
  templateUrl: './add-daily-topic-dialog.component.html',
  styleUrls: ['./add-daily-topic-dialog.component.css']
})
export class AddDailyTopicDialogComponent implements OnInit {

  student: Student;
  description: string;
  name: string;

  isFormValid: boolean;
  isNameValid: boolean;
  isDescriptionValid: boolean;

  constructor(private dialogRef: MatDialogRef<AddDailyTopicDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public injectedStudent: Student) { }

  ngOnInit() {
    this.student = this.injectedStudent;
  }

  createDailyTopic(): void {
    if (this.checkForm()) {
      this.dialogRef.close(new DailyTopic(null, new Date(), this.description, this.name, this.student));
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

    if (this.description && this.description.length > 0) {
      this.isDescriptionValid = true;
    } else {
      this.isDescriptionValid = false;
      this.isFormValid = false;
    }

    return this.isFormValid;
  }

}
