import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginObj : any = {
    userName : '',
    password : ''
  }
  router = inject(Router)

  onLogin(){
    // debugger;
    if(this.loginObj.userName == 'Admin' && this.loginObj.password == '1230'){
      this.router.navigateByUrl("/admin");
    } else {
      alert("Wrong Credentials")
    }
  }

}
