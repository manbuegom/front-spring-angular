import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from './teacher/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseUrl = "http://localhost:8080/api/v1/teachers"

  constructor(private http: HttpClient) { }

  getTeachers(): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.baseUrl);
  }

  createTeacher(teacher: Teacher): Observable<Object> {
    return this.http.post(this.baseUrl, teacher);
  }

  getTeacherById(id: number): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.baseUrl}/${id}`)
  }

  updateTeacher(id: number, teacher: Teacher): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, teacher)
  }

  deleteTeacher(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
