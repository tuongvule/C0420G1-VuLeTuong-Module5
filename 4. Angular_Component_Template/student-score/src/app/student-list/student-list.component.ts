import { Component, OnInit } from '@angular/core';
import {Student} from '../../Student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [
    {
      studentId: 1,
      studentName: 'Tuong',
      studentEmail: 'tuong@gmail.com',
      studentPhone: '0903182767',
      studentAddress: 'Quang Nam'
    },
    {
      studentId: 2,
      studentName: 'Viet',
      studentEmail: 'viet@gmail.com',
      studentPhone: '0903182212',
      studentAddress: 'Quang Binh'
    },
    {
      studentId: 3,
      studentName: 'Huy',
      studentEmail: 'huy@gmail.com',
      studentPhone: '0905182467',
      studentAddress: 'Da Nang'
    },
  ];
  studentDetail: Student;
  studentEdit: Student;
  constructor() { }
  ngOnInit(): void {
  }
  changeStudent(value){
    this.studentDetail = value;
    console.log(this.studentDetail);
  }
  getMark(value){
    this.studentDetail.studentMark = value;
  }

  showEditStudent(value) {
    this.studentEdit = value;
    console.log(this.studentEdit);
  }
}
