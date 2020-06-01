import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/services/student-service.service';
import{NgForm} from "@angular/forms";
import { Student} from "src/app/models/student";

declare var M:any;


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [StudentServiceService]
})
export class StudentsComponent implements OnInit {

  constructor(private es: StudentServiceService) { }

  ngOnInit(): void {
    this.getStudent();
  }


  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.es.selectedStudent =new Student();
    }
  }

  addStudent(sFrom:NgForm){
    if(sFrom.value._id){
      this.StudentServiceService.editStudent(sFrom.value).subscribe((res:any)=>{
        this.resetForm();
        M.toast({html:res.status});
        this.getStudent();
      });
    }else{
      console.log(sFrom.value);
      this.StudentServiceService.createStudent(sFrom.value).subscribe((res)=>{
        console.log(res);
        this.resetForm();
        M.toast({html: res.status});
        this.getStudent();
      });
    }
  }

  getStudent(){
    this.StudentServiceService.getStudents().subscribe((res)=>{
      this.StudentServiceService.student = res as Student[];
    })
  }

  editStudent(student:Student){
    this.StudentServiceService.selectedStudent = student;
  }

  deleteStudent(_id:string){
    if(confirm("Are you sure?")){
      this.StudentServiceService.deleteStudent(_id).subscribe((res:any)=>{
        M.toast({html:res.status});
        this.getStudent();
      });
    }
  }

}
