import { NgClass, NgStyle } from '@angular/common';
import { Component, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})

export class AttDirective {

  divClassName = signal<string>("")

  setBgClass(className : string){
    this.divClassName.set(className)
  }

  isDiv2Green : boolean = false;

  toggleDiv2Color(){
    this.isDiv2Green = !this.isDiv2Green;

    
  }
}
