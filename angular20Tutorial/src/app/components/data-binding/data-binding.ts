import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  
  courseName: string = "Angular 20 Tutorial has launched";
  
  productPrice : number = 15236;
  
  maxLength : number = 5;
  
  minChar : number = 3;

  // inputType : string = "radio"
  inputType : string = "checkbox"

  myClassName : string = "myColor"

  constructor(){
  }

  showWelcomeMessage(){
    alert("Welcome to Angular 20")
  }

  changeCourseName(){
    this.courseName = "Reactjs Tutorial"
  }

  onCityChange(){
    alert("City changed successfully...")
  }

}
