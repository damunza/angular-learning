import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';//importing the output detector and eventemitter class
import {Goal} from '../goal'

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {

  @Input() goal:Goal;
  @Output()  isComplete= new EventEmitter<boolean>();//for the delete | creating an eventemitter function that takes a boolean

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);//goal complete function with an emit method
  }

  constructor() { }

  ngOnInit() {
  }

}
