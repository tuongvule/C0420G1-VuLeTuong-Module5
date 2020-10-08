import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../../Student';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-student-edit-row',
  templateUrl: './student-edit-row.component.html',
  styleUrls: ['./student-edit-row.component.css']
})
export class StudentEditRowComponent implements OnInit {
  @Input()
  check: boolean;
  @Input()
  studentEditInRow: Student;
  @Output()
  check1: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value: any) {
    this.studentEditInRow = value;
  }
  getCheck(){
    if (this.check){
      this.check = false;
    }else {
      this.check = true;
    }
    this.check1.emit(this.check);
  }
}
