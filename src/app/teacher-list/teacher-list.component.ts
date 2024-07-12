import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Teacher } from '../teacher/teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css'
})
export class TeacherListComponent  implements OnInit {
  teachers!: Teacher[];

  constructor(private teacherService: TeacherService) {}

  ngOnInit(): void {
    this.getTeachers();
  }

  private getTeachers(){
    this.teacherService.getTeachers().subscribe(data => {
      this.teachers = data;
    });
  }

}
