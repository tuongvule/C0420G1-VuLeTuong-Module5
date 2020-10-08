import {Component, Input, OnInit} from '@angular/core';
import { Student } from 'src/Student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  @Input()
  studentEdit: Student;
  constructor() { }
  editName(value){
    this.studentEdit.studentName = value;
  }
  ngOnInit(): void {
  }

  editPhone(value) {
    this.studentEdit.studentPhone = value;
  }

  editEmail(value: any) {
    this.studentEdit.studentEmail = value;
  }
  editAddress(value: any) {
    this.studentEdit.studentAddress = value;
  }
}
