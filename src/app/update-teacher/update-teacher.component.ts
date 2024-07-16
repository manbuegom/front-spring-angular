import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher/teacher';
import { FormsModule } from '@angular/forms';
import { TeacherService } from '../teacher.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-teacher',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-teacher.component.html',
  styleUrl: './update-teacher.component.css'
})
export class UpdateTeacherComponent implements OnInit {

  id: number = 0;
  teacher: Teacher = new Teacher();
  constructor(private teacherService: TeacherService, private activatedRoute: ActivatedRoute, private router: Router) {}

  //ActivatedRouter -> get id property of path
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.teacherService.getTeacherById(this.id).subscribe(data => {
      this.teacher = data;
      }, error => console.log(error));
  }

  updateTeacher() {
    this.teacherService.updateTeacher(this.id,this.teacher).subscribe( data =>{
    this.goToTeacherList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.updateTeacher();
    console.log('Teacher has been updated!', this.teacher);
  }

  goToTeacherList() {
    this.router.navigate(['/teachers'])
  }

}
