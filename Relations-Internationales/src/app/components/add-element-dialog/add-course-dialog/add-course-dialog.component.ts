import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course-dialog',
  templateUrl: './add-course-dialog.component.html',
  styleUrls: ['./add-course-dialog.component.css']
})
export class AddCourseDialogComponent implements OnInit {

  private teachers = ['Teacher 1', 'Teacher 2', 'Teacher 3'];

  constructor() { }

  ngOnInit() {
  }

}
