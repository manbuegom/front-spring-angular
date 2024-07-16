import { Routes } from '@angular/router';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'teachers', component: TeacherListComponent },
  { path: 'createTeacher', component: CreateTeacherComponent },
  { path: 'updateTeacher/:id', component: UpdateTeacherComponent },
  { path: 'teacherDetails/:id', component: TeacherDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
