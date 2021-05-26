import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `<h2>{{ "Title: " + getTitle() }}</h2>
  
  <ul>
    <li *ngFor="let course of courses">
        {{course}}
    </li>
  </ul>
  
  `
})
export class courseComponent {
  title = 'Courses List';
  courses;

  constructor(service: CoursesService)
  {
      this.courses = service.getCourses();
  }

  getTitle()
  {
      return this.title;
  }
}
