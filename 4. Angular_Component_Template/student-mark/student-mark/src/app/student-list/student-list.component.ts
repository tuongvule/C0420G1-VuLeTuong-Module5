import { Component, OnInit } from '@angular/core';
import {Student} from '../../Student';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
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
  studentDelete: Student;
  studentEditInRow: Student;
  check = true;
  idEditInRow: number;
  addFormStudent: FormGroup;
  editFormStudent: FormGroup
  constructor() { }
  showStudentDetail(value){
    this.studentDetail = value;
    console.log(this.studentDetail);
  }
  showStudentEditInRow(value){
    this.studentEditInRow = value;
    this.idEditInRow = this.studentEditInRow.studentId;
    if (this.check ){
      this.check = false;
    }else {
      this.check = true;
    }
  }
  getCheck(value){
    this.check = value;
  }
  getMarkFromDetail(value){
    this.studentDetail.studentMark = value;
  }
  ngOnInit(): void {
    this.addFormStudent = new FormGroup({
      studentId: new FormControl('', [Validators.required, Validators.min(0), Validators.max(10)]),
      studentName: new FormControl('', Validators.required),
      studentPhone: new FormControl('', [Validators.required, this.validatePhone]),
      studentEmail: new FormControl('', Validators.required),
      studentAddress: new FormControl('', Validators.required)
    });
    this.editFormStudent = new FormGroup({
      studentId: new FormControl('', [Validators.required, Validators.min(0), Validators.max(10)]),
      studentName: new FormControl('', Validators.required),
      studentPhone: new FormControl('', [Validators.required, this.validatePhone]),
      studentEmail: new FormControl('', Validators.required),
      studentAddress: new FormControl('', Validators.required)
    });
  }

  showStudentEdit(value) {
    this.studentEdit = value;
  }

  addStudent(value) {
    this.students.push(value);
  }

  // @ts-ignore
  addFormStudent1(){
    this.students.unshift(this.addFormStudent.value);
    console.log(this.addFormStudent.value);
  }

  showStudentDelete(value) {
    this.studentDelete = value;
    console.log(value);
    // tslint:disable-next-line:prefer-const
    const index = this.students.findIndex(s => s.studentId === this.studentDelete.studentId);
    const check: boolean = confirm('Do you want to delete this student?: ' + this.studentDelete.studentName);
    console.log(check);
    if (check){
      // xóa 1 phần tử từ index
      this.students.splice(index, 1);
      console.log(this.students.toString());
    }
  }
  // c: AbstractControl: là thẻ input
  // const v = c.value; lấy value của thẻ input ra
  validatePhone(c: AbstractControl): {[key: string]: boolean} {

    const v = c.value;
    return (v === '0903736122' ) ? null : {phoneInvalid: true};
  }

  editReactive(student: Student) {
    this.editFormStudent.patchValue(student);
  }

  editFormStudent1(editFormStudent) {
    console.log(editFormStudent.value);
    const index = this.students.findIndex(s => s.studentId === editFormStudent.value.studentId);
    this.students[index] = editFormStudent.value;
  }
}
