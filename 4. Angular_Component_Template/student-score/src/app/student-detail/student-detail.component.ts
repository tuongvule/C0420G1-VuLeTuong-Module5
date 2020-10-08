import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../../Student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  @Input()
  studentDetail1: Student;
  @Output()
  markOutput: EventEmitter<number> = new EventEmitter()
  constructor() { }
  getMarkFromStudentDetail(value){
    this.markOutput.emit(value);
  }
  ngOnInit(): void {
  }

}
