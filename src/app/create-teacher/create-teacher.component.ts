import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher/teacher';
import { FormsModule } from '@angular/forms';
import { TeacherService } from '../teacher.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-teacher',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-teacher.component.html',
  styleUrl: './create-teacher.component.css'
})
export class CreateTeacherComponent implements OnInit {

  teacher: Teacher = new Teacher();
  constructor(private teacherService: TeacherService, private router: Router) { }

  saveTeacher() {
    this.teacherService.createTeacher(this.teacher).subscribe( data =>{
      this.goToTeacherList();
    },
    error => console.log(error));
  }

  goToTeacherList() {
    this.router.navigate(['/teachers'])
  }
  onSubmit() {
    this.saveTeacher();
    console.log('Teacher has been submitted', this.teacher);

  }

  ngOnInit(): void {}

}
