import { Component, OnInit } from '@angular/core';
import { SimulatorService } from 'src/app/services/simulator/simulator.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  constructor(private simulator: SimulatorService, private activatedRoute: ActivatedRoute) { }

  private selectedStudent: Student;
  private selectedCourse: Course;
  // Simulator attributes
  private simulatedStudents: Student[];
  private simulatedCourses: Course[];

  ngOnInit() {
    this.simulatedStudents = [];
    this.simulatedCourses = [];

    this.simulator.getObjectsSimulated().forEach(lists => {
      lists.forEach(object => {
        if (object instanceof Student) { this.simulatedStudents.push(object); }
        if (object instanceof Course) { this.simulatedCourses.push(object); }
      });
    });

    this.activatedRoute.params.subscribe(params => {
      this.simulatedStudents.forEach(simulatedStudent => {
        if (simulatedStudent.getIdPerson() === params.isPerson) { this.selectedStudent = simulatedStudent; }
      });

      this.simulatedCourses.forEach(simulatedCourse => {
        if (simulatedCourse.getIdCourse() === params.idCourse) { this.selectedCourse = simulatedCourse; }
      });

      console.log(this.selectedStudent);
      console.log(this.selectedCourse);
    });
  }

}
