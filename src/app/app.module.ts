import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentChildComponent } from './students/student-child/student-child.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { StudentService } from './shared/student.service';
import {FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';
 

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentChildComponent,
    StudentsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
