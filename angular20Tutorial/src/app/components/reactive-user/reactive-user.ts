import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-user',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-user.html',
  styleUrl: './reactive-user.css'
})
export class ReactiveUser implements OnInit{
  http = inject(HttpClient)
  userList : any[] = []

  userForm : FormGroup = new FormGroup({
    userId : new FormControl(0),
    emailId : new FormControl("",[Validators.required, Validators.minLength(5), Validators.email]),
    password : new FormControl("", Validators.required),
    fullName : new FormControl(""),
    mobileNo : new FormControl("")
  });


  ngOnInit(): void {
      this.getUsers()
  }

  getUsers(){
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((Res : any) => {
      this.userList = Res;
    })
  }

  onSaveUser(){
    debugger;
    const formValue = this.userForm.value
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", formValue).subscribe({next:(Res)=>{
        debugger;
        alert("User created successfully...");
        this.getUsers();
      },
      error:(error) => {
        debugger;
        alert("Error - " + error.error);
      }
    })
  }



}
