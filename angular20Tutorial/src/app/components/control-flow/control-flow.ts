import { Component } from '@angular/core';
import { FormsModule, SelectControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {

  isParaVisible : boolean = true;
  showPara(){
    this.isParaVisible = true;
  }
  hidePara(){
    this.isParaVisible = false;
  }

  monthName : string = 'feb';
  selectMonth(){
    alert("Month selected successfully...")
  }

  cityList : string[] = ["Mumbai", "Pune", "Jalgaon", "Nasik", "Hyderabad"]

  studentList : any[] = [
    {name : 'AAA', city : 'Mumbai', isActive : false },
    {name : 'BBB', city : "Delhi", isActive : false},
    {name : 'CCC', city : 'Chopda', isActive : true },
    {name : 'ARG', city : 'Aurangabad', isActive : true}
  ]
}
