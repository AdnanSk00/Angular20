import { Component } from '@angular/core';

@Component({    // Component Decorator
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})

export class Admin {

  firstName = "Shaikh";

  courseName = "Angular 20 Tutorial";

  rollNo = 56;
  

}
