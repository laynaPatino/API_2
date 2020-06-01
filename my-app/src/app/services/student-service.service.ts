import { Injectable } from '@angular/core';//*
import { Student } from "../models/student";//*
import { HttpClient } from "@angular/common/http";//*


@Injectable({
  providedIn: 'root'
})

export class StudentServiceService {

  selectedStudent: Student;//*
  students: Student[];//*
  readonly url = "http://localhost:3000/api";

  constructor(private http: HttpClient) {//*
    this.selectedStudent = new Student();
   }

  //metodo createStudent()
  createStudent(student: Student) {
    return this.http.post(this.url, student);
  }

  //metodo getStudent()//*
  getStudent(_id: string) {
    return this.http.get(this.url + `/${_id}`);
  }

  //metodo editStudent()
  editStudent(student: Student) {
    return this.http.put(this.url + `/${student._id}`, student)
  }

  //metodo deleteStudent()
  deleteStudent(_id: string){
    return this.http.delete(this.url + `/${_id}` );
  }

}
