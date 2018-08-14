import { Component, OnInit } from '@angular/core';
import{Goal}from'../goal';
// import{Goals}from '../goals'//importing the goals class from goals.ts | commented out because goalservice does its functin
import {GoalService} from '../goals/goal.service';
import {AlertsService} from '../alert-service/alerts.service';
// import {HttpClient} from '@angular/common/http' // QuoteRequestServicedoes tits function
import {Quote} from '../quote-class/quote' //QuoteRequestService does its function
import {QuoteRequestService} from '../quote-http/quote-request.service'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  providers:[GoalService, QuoteRequestService],
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  // goals=Goals;
  goals:Goal[];// imports a service
  alertService:AlertsService;
  quote:Quote;

  // goals = [
  //      new Goal(1,'Watch Deception','find online version of deception',new Date(2018,7,10)),
  //      new Goal(2,'Buy Cookies','go to the shop and get chocolate cookies',new Date(2018,7,11)),
  //      new Goal(3, 'Get new Phone Case','pick case from the mall',new Date(2018,7,15)),
  //      new Goal(4, 'Get Dog Food','go to the butchery and get meat',new Date(2018,7,10)),
  //      new Goal(5, 'Solve math homework','finish the last question on math',new Date(2018,7,13)),
  //      new Goal(6, 'Plot my world domination plan','make my fantasy real',new Date(2018,7,14)),
  //  ]

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
                this.alertService.alertMe("Goal has been deleted")
            }
        }
    }

   //deleting items after completion

   // completeGoal(isComplete,index){
   //      if (isComplete){
   //          this.goals.splice(index,1);
   //          }
   //          }

  // constructor(goalService:GoalService, alertService:AlertsService, private http:HttpClient) {
  //   this.goals= goalService.getGoals();
  //   this.alertService = alertService;
  //  } //from line 68 to 71 replaced by one bellow

  constructor(goalService:GoalService,alertService:AlertsService,private quoteService:QuoteRequestService) {
 this.goals = goalService.getGoals();
 this.alertService = alertService;
  }

  // ngOnInit() {
  //  //  this.http.get("https://talaikis.com/api/quotes/random/").subscribe(data=>{
  //  //     // Successful API request.
  //  // })
  //  interface ApiResponse{
  //       quote:string;
  //       author:string;
  //   }
  //   this.http.get<ApiResponse>("https://talaikis.com/api/quotes/random/").subscribe(data=>{
  //       this.quote= new Quote(data.quote,data.author)
  //     },err=>{
  //       this.quote= new Quote("Never, never, never give up.","winston churchill")
  //       console.log("Error occured ")
  //   })
  // }//shows the different stages of the life cycle of a component | line 78-92 replaced by one below

  ngOnInit() {
    this.quoteService.quoteRequest()
    this.quote=this.quoteService.quote
  }

}
