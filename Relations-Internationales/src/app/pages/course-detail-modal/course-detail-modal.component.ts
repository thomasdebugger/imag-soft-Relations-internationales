import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course-detail-modal',
  templateUrl: './course-detail-modal.component.html',
  styleUrls: ['./course-detail-modal.component.css']
})
export class CourseDetailModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CourseDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course) { }


  ngOnInit() {
    console.log(this.data);
  }

}
