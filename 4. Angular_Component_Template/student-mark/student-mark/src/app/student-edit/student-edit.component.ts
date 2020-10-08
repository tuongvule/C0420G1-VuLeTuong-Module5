import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../Student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  @Input()
  studentEdit1: Student;
  constructor() { }
  ngOnInit(): void {
  }

  editName(value: any) {
    this.studentEdit1.studentName = value;
  }

  editPhone(value: any) {
    this.studentEdit1.studentPhone = value;
  }

  editEmail(value: any) {
    this.studentEdit1.studentEmail = value;
  }

  editAddress(value: any) {
    this.studentEdit1.studentAddress = value;
  }

  editMark(value: any) {
    this.studentEdit1.studentMark = value;
  }
}
