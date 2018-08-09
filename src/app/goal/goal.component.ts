import { Component, OnInit } from '@angular/core';
import{Goal}from'../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals = [
       new Goal(1,'Watch Deception','find online version of deception',new Date(2018,7,10)),
       new Goal(2,'Buy Cookies','go to the shop and get chocolate cookies',new Date(2018,7,11)),
       new Goal(3, 'Get new Phone Case','pick case from the mall',new Date(2018,7,15)),
       new Goal(4, 'Get Dog Food','go to the butchery and get meat',new Date(2018,7,10)),
       new Goal(5, 'Solve math homework','finish the last question on math',new Date(2018,7,13)),
       new Goal(6, 'Plot my world domination plan','make my fantasy real',new Date(2018,7,14)),
   ]

   // creating a toogleDetails function
   toogleDetails(index){//locates the goal at the index passed
       this.goals[index].showDescription = !this.goals[index].showDescription;
   }//converts the showDescriptionfrom true to false

    //adding Goals

   addNewGoal(goal){
       let goalLength = this.goals.length;
       goal.id=goalLength+1;
       goal.completeDate = new Date(goal.completeDate)
       this.goals.push(goal)

   }

    //deleting item

    deleteGoal(isComplete,index){
        if (isComplete){
            let toDelete=confirm(`Are you sure you want to delete ${this.goals[index].name}`)

            if(toDelete){
                this.goals.splice(index,1)
            }
        }
    }

   //deleting items after completion

   // completeGoal(isComplete,index){
   //      if (isComplete){
   //          this.goals.splice(index,1);
   //          }
   //          }

  constructor() { }

  ngOnInit() {
  }//shows the different stages of the life cycle of a component

}
