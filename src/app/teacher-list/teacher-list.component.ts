import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Teacher } from '../teacher/teacher';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css'
})
export class TeacherListComponent  implements OnInit {
  teachers!: Teacher[];

  constructor(private teacherService: TeacherService, private router: Router) {}

  ngOnInit(): void {
    this.getTeachers();
  }

  private getTeachers(){
    this.teacherService.getTeachers().subscribe(data => {
      this.teachers = data;
    });
  }

   updateTeacher(id: number){
    this.router.navigate(['updateTeacher', id])
  }

   teacherDetails(id: number){
    this.router.navigate(['teacherDetails', id])
  }

   deleteTeacher(id: number){
    this.teacherService.deleteTeacher(id).subscribe( data => {
      console.log(data);
      this.getTeachers();
    })
  }
}
