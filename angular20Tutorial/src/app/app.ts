import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from "./components/user/user";
import { Bolt } from './components/bolt/bolt';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from "./components/signal-ex/signal-ex";
import { ControlFlow } from './components/control-flow/control-flow';
import { Master } from './services/master';

@Component({    // Component Decorator
  selector: 'app-root',
  // imports: [Admin, User, Bolt, DataBinding, SignalEx, ControlFlow],
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular20Tutorial';
  // loggedUserName : string = '';

  // constructor(private masterService: Master) {
  //   this.readLoggedData();

  //   this.masterService.onLogin.subscribe(res=>{
  //     this.readLoggedData();
  //   })
  // }

  // readLoggedData() {
  //    const loggedData = localStorage.getItem("angular20User");
  //    if(loggedData != null){
  //     this.loggedUserName = loggedData;
  //   }
  // }

  // onLogout(){
  //   localStorage.removeItem("angular20User");
  //   this.readLoggedData();
  //   this.loggedUserName = '';
  // }

}
