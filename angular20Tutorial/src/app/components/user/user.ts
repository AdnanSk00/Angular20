import { HttpClient } from '@angular/common/http';
import { EOF } from '@angular/compiler';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../../services/master';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit{

  http = inject(HttpClient)
  
  masterService = inject(Master)                       // same
  // constructor(private masterService : Master){      // same
  // }

  userList : any[] = [];
  userObj : any = {
  "userId": 0,
  "emailId": "",
  "password": "",
  "fullName": "",
  "mobileNo": ""
  }


  ngOnInit(): void {
      this.getUsers();
      debugger;
      const result = this.masterService.getSum(4, 5);
      const appData = this.masterService.appName;
  }

  getUsers(){
    // this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((Res : any) => {
    //   this.userList = Res;
    // })
    debugger;
    this.masterService.getUser().subscribe((Res : any) => {
      debugger;
      this.userList = Res;
    })
  }

  onSaveUser(){
    debugger;
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", this.userObj).subscribe({next:(Res)=>{
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
  
  onResetUser(){
    this.userObj = {
      "userId": 0,
      "emailId": "",
      "password": "",
      "fullName": "",
      "mobileNo": ""
    }
  }

  onEditUser(item : any){
    this.userObj = item;
  }
  
  
  onUpdateUser(){
    this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=" + this.userObj.userId, this.userObj).subscribe({
      next:()=>{
        alert("User updated successfully...");
        this.getUsers();
      },
      error:(error)=>{
        alert("Error - " + error.error);
      }
    })
  }

  onDeleteUser(id : number){
    debugger;
    const isDelete = confirm("Are you sure you want to Delete?");
    if(isDelete){
      this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=" + id).subscribe({
        next:()=>{
          alert("User deleted successfully...");
          this.getUsers();
        },
        error:(error)=>{
          alert("Error - " + error.error);
        }
      })
    }
  }

}

