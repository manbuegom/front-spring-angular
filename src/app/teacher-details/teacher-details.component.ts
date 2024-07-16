import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher/teacher';
import { FormsModule } from '@angular/forms';
import { TeacherService } from '../teacher.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teacher-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './teacher-details.component.html',
  styleUrl: './teacher-details.component.css'
})
export class TeacherDetailsComponent implements OnInit {

  id: number = 0;
  teacher: Teacher = new Teacher();
  constructor(private teacherService: TeacherService, private activatedRoute: ActivatedRoute, private router: Router) {}

  //ActivatedRouter -> get id property of path
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.teacher = new Teacher();
    this.teacherService.getTeacherById(this.id).subscribe(data => {
      this.teacher = data;
      });
  }

}
