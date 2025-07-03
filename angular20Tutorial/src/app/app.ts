import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from "./components/user/user";
import { Bolt } from './components/bolt/bolt';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from "./components/signal-ex/signal-ex";
import { ControlFlow } from './components/control-flow/control-flow';

@Component({    // Component Decorator
  selector: 'app-root',
  // imports: [Admin, User, Bolt, DataBinding, SignalEx, ControlFlow],
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular20Tutorial';
}
