import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher/teacher';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-teacher',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-teacher.component.html',
  styleUrl: './create-teacher.component.css'
})
export class CreateTeacherComponent implements OnInit {

  teacher: Teacher = new Teacher();
  constructor() { }

  onSubmit() {
    console.log('Teacher has been submitted', this.teacher);
  }

  ngOnInit(): void {}

}
