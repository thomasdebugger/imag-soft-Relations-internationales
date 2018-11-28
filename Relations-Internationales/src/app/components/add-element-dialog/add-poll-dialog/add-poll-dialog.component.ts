import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Course } from 'src/app/models/course';
import { Poll } from 'src/app/models/poll';
import { PossibleAnswer } from 'src/app/models/possible-answer';

@Component({
  selector: 'app-add-poll-dialog',
  templateUrl: './add-poll-dialog.component.html',
  styleUrls: ['./add-poll-dialog.component.css']
})
export class AddPollDialogComponent implements OnInit {

  course: Course;
  question: string;
  possibleAnswers: string[];
  possibleAnswer: string;

  constructor(private dialogRef: MatDialogRef<AddPollDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public injectedCourse: Course) { }

  ngOnInit() {
    this.course = this.injectedCourse;
    this.possibleAnswers = [];
    this.possibleAnswer = '';
  }

  addPossibleAnswer() {
    this.possibleAnswers.push(this.possibleAnswer);
    this.possibleAnswer = '';
  }

  removePossibleAnswer(index: number) {
    this.possibleAnswers.splice(index, 1);
  }

  createPoll(): void {
    const newPoll = new Poll(null, this.course, 'sent', this.question, null, null, []);

    this.possibleAnswers.map(value => new PossibleAnswer(null, newPoll, value));

    this.dialogRef.close(newPoll);
  }
}
