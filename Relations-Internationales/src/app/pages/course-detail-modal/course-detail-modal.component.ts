import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Course } from 'src/app/models/course';
import { MarkService } from 'src/app/services/back/mark.service';
import { Mark } from 'src/app/models/mark';
import { Poll } from 'src/app/models/poll';
import { PossibleAnswer } from 'src/app/models/possible-answer';
import { PossibleAnswerService } from 'src/app/services/back/possible-answer.service';
import { PollService } from 'src/app/services/back/poll.service';
import { AddMarkModalComponent } from '../add-mark-modal/add-mark-modal.component';

@Component({
  selector: 'app-course-detail-modal',
  templateUrl: './course-detail-modal.component.html',
  styleUrls: ['./course-detail-modal.component.css']
})
export class CourseDetailModalComponent implements OnInit {

  marks: Mark[] = [];
  polls: Poll[] = [];

  mark : string = '';
  typeMark : string = '';

  private possibleAnswers: { [idPoll: string]: PossibleAnswer[] } = {};
  selectedAnswers: { [idPoll: string]: string } = {};

  constructor(public dialogRef: MatDialogRef<CourseDetailModalComponent>,
    public dialog: MatDialog,
    private markService: MarkService,
    private possibleAnswerService: PossibleAnswerService,
    private pollService: PollService,
    @Inject(MAT_DIALOG_DATA) public data: { course: Course, idStudent: string }) { }


  ngOnInit() {
    this.pollService.getPollsByStudent(this.data.course.getIdCourse(), this.data.idStudent)
      .subscribe(pollResult => {
        pollResult['polls'].forEach(poll => {
          if (poll.getStatus() !== 'Answered') {
            this.polls.push(poll);
          }
        });
        this.polls.forEach(poll => {
          this.possibleAnswerService.getPossibleAnswersByPoll(poll.getIdPoll()).subscribe(
            possibleAnswersResult => {
              if (!this.possibleAnswers[poll.getIdPoll()]) {
                this.possibleAnswers[poll.getIdPoll()] = [];
              }
              possibleAnswersResult['possibleAnswers']
                .forEach(possibleAnswer => this.possibleAnswers[poll.getIdPoll()].push(possibleAnswer));
            });
        });
      });

    this.markService.getMarksByStudent(this.data.course.getIdCourse(), this.data.idStudent).subscribe(
      result => {
        result['marks'].forEach(mark => this.marks.push(mark));
      });
  }

  sendAnswer(idPoll: string, index: number) {
    if (this.selectedAnswers[idPoll]) {
      this.pollService.update_poll(this.selectedAnswers[idPoll], idPoll).subscribe(() => {
        this.polls.splice(index, 1);
      });
    }
  }

  addMark(){
    var newData = this.marks;
     const dialogRef = this.dialog.open(AddMarkModalComponent, {
       width: '250px',
       data: { mark: this.mark, typeMark: this.typeMark }
     });

     dialogRef.afterClosed().subscribe(result => {
      const newMark = new Mark({
        idMark: null,
        idCourse: this.data.course.getIdCourse(),
        idPerson: this.data.idStudent,
        typeMark: result.mark,
        valueMark: result.typeMark
      });

      newData.push(newMark);
      this.marks = newData;
      this.markService.addMark(newMark).subscribe();
      
     });
  }
}
