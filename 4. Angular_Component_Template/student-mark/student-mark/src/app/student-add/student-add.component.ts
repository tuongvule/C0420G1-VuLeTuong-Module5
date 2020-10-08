import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../../Student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  studentAdd: Student = {
    studentId: 0,
    studentName: '',
    studentEmail: '',
    studentPhone: '',
    studentAddress: ''
  };
  @Output()
  studentAdd1: EventEmitter<Student> = new EventEmitter<Student>();
  constructor() { }
  addStudent(){
    // tslint:disable-next-line:radix
    const id: number =   parseInt(String((document.getElementById('studentId') as HTMLInputElement).value))  ;
    const name: string = (document.getElementById('studentName') as HTMLInputElement).value;
    const phone: string = (document.getElementById('studentPhone') as HTMLInputElement).value;
    const email: string = (document.getElementById('studentEmail') as HTMLInputElement).value;
    const address: string = (document.getElementById('studentAddress') as HTMLInputElement).value;
    // tslint:disable-next-line:radix
    this.studentAdd.studentId = id;
    this.studentAdd.studentName = name;
    this.studentAdd.studentPhone = phone;
    this.studentAdd.studentEmail = email;
    this.studentAdd.studentAddress = address;
    this.studentAdd1.emit(this.studentAdd);
  }
  ngOnInit(): void {
  }

}
