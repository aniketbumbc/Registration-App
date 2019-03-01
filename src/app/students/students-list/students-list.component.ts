import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';
import { Student } from 'src/app/shared/student.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  constructor(private service:StudentService,private tostr:ToastrService) { }

  ngOnInit() {
    console.log(this.service.formData);
    this.service.refreshList();
  }
  populateForm(item : Student){ 
      this.service.formData = Object.assign({},item);
  }
  deleteStudentRecord(id:number){
    if(confirm("You Want Delete This Record ?"))
    this.service.deleteStudent(id).subscribe(res=>{
      this.service.refreshList();
      this.tostr.info("Delte Sucessfully Record",'Student.Register');      
    });
  }
}
