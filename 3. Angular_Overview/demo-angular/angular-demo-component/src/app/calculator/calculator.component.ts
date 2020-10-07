import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {


  constructor() { }

  number1: number;
  number2: number;
  operator;
  result: number;
  changeOperator(value){
    this.operator = value;
  }

  // calculator(){
  //   this.result = this.number1 * this.number2;
  // }
  updateNumber1(value){
    this.number1 = value;
  }
  updateNumber2(value){
    this.number2 = value;
  }

  calculator(){
    switch (this.operator) {
    case '+':
      // tslint:disable-next-line:radix
      this.result = parseInt(String(this.number1)) + parseInt(String(this.number2));
      break;
    case '-':
      // tslint:disable-next-line:radix
      this.result = parseInt(String(this.number1)) - parseInt(String(this.number2));
      break;
    case '*':
      // tslint:disable-next-line:radix
      this.result = parseInt(String(this.number1)) * parseInt(String(this.number2));
      break;
    case '/':
      // tslint:disable-next-line:radix
      this.result = parseInt(String(this.number1)) / parseInt(String(this.number2));
      break;
    default:
        break;
    }


}

  ngOnInit(): void {
  }
}
