import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lcycle-event',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, JsonPipe, DatePipe],
  templateUrl: './lcycle-event.html',
  styleUrl: './lcycle-event.css'
})
export class LCycleEvent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  constructor(){
    console.log("Constructor")
  }
  
  ngOnInit(): void {
    console.log("ngOnInit")
    // to trigger api calls
    // to subscribe
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
    // to deal with viewChild
    // to subscribe
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
    // to unsubscibe
    // restrict user from navigating
  }

  // ------- Pipes ---------

  // Pipes - are used to format the data
  firstName : string = "Adnan"
  courseName : string = "Angular 20 Tutorial"
  nayaSaal : string = "happy new year"

  rollNoList = [52, 54, 56, 58, 60, 62]

  studList : any = {
    name : 'Aman',
    city : 'Bhusawal',
    state : 'MH'
  }

  currentDate : Date = new Date()
}
