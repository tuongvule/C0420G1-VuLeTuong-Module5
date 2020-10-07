import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  student = {
    id: 1,
    name: 'Tuong',
    age: 23,
    mark: 0
  }

  imageUrl = 'https://media.thethao247.vn/origin_1920x0/upload/cuongnm/2020/09/29/messi-1-154949-1.jpg';
  constructor() { }

  changeMark(value){
    this.student.mark = value;
  }
  ngOnInit(): void {
  }

}
