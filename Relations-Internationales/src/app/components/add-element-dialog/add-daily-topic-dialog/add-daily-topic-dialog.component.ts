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

  private student: Student;
  private description: string;
  private name: string;

  constructor(private dialogRef: MatDialogRef<AddDailyTopicDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public injectedStudent: Student) { }

  ngOnInit() {
    this.student = this.injectedStudent;
  }

  createDailyTopic(): void {
    this.dialogRef.close(new DailyTopic(null, new Date(), this.description, this.name, this.student));
  }

}
