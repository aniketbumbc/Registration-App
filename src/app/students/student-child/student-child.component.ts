import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-child',
  templateUrl: './student-child.component.html',
  styleUrls: ['./student-child.component.css']
})
export class StudentChildComponent implements OnInit {

  constructor(private service: StudentService,
    private tostr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      StudentId: null,
      FirstName: "",
      LastName: "",
      City: "",
      Address: "",
      ContactNo:null
    }
  }
  onSubmit(form:NgForm){
    if(form.value.StudentId == null)
  this.insertRecord(form);
  else
  this.updateRecord(form);
  }

  insertRecord(form:NgForm){
  this.service.postStudent(form.value).subscribe(res =>{
    this.tostr.success("Inserted Sucessfully",'Student.Register');
    this.resetForm(form);
    this.service.refreshList();
   
  });
  }

    updateRecord(form:NgForm){
    this.service.updateStudent(form.value).subscribe(res =>{
      this.tostr.warning("Update Sucessfully",'Student.Register');
      this.resetForm(form);
      this.service.refreshList();
    });
    }
  

}
