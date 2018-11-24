import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SimulatorService } from 'src/app/services/simulator/simulator.service';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  constructor(private simulator: SimulatorService,
    private router: Router) { }

  @Input() selectedStudent: Student;
  @Input() selectedCourse: Course;
  @Output() backToStudent: EventEmitter<boolean> = new EventEmitter();
  // Simulator attributes
  private simulatedCourses: Course[];

  ngOnInit() {
    this.simulatedCourses = [];

    this.simulator.getObjectsSimulated().forEach(lists => {
      lists.forEach(object => {
        if (object instanceof Course) { this.simulatedCourses.push(object); }
      });
    });

    this.simulatedCourses.forEach(simulatedCourse => {
      if (simulatedCourse.getIdCourse() === this.selectedCourse.getIdCourse()) { this.selectedCourse = simulatedCourse; }
    });
  }

  goToStudent(): void {
    this.backToStudent.emit();
  }
}
