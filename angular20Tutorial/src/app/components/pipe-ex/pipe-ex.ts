import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na-pipe';

@Component({
  selector: 'app-pipe-ex',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, SlicePipe, JsonPipe, NaPipe],
  templateUrl: './pipe-ex.html',
  styleUrl: './pipe-ex.css'
})
export class PipeEx {

  // courseName : string = "Angular";
  courseName = "Angular";

  courseDuration = "DuraTion is 3 mOnTH"

  currentDate : Date = new Date();

  rollNoList : number[] = [111, 222, 333, 444, 555, 666, 777, 888]

  studObj : any = {
    name : 'A@A',
    mobile : '53910004',
    address : {
      city : 'Pune',
      // state : "MH"
      state : ""
    }
  }


}
