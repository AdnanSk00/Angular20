import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css'
})
export class SignalEx {

  firstName : string = "Shaikh";    // normal value declaration
  productName = "Moto"              // ---"---
  
  courseName = signal<string>("Angular");   // signal val declaration
  courseDuration = signal("17 videos")      // ---"---

  courseDetail = computed(()=> this.courseName() + " - " + this.courseDuration())

  constructor(){
    this.productName = "Rola"       // change normal val
    console.log(this.productName)   // normal value - print

    console.log(this.courseName())  // signal value - print

    // this.courseName.set("React") // change signal val
    // console.log(this.courseName())
    
    setTimeout(() => {              // change - after 5 sec
      this.courseName.set("React")
      console.log(this.courseName())
    }, 5000);
  }
}
