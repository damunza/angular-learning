import { Component } from '@angular/core';//import is to bring modules we want to use in the app | angular/core is where we want to find our modules

      //linking to goal.ts
import{Goal}from'./goal';

// connecting the app to app.component.html

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'my app';
// }

// connecting the app to index.html

// @Component({
//   selector: 'app-root',
//   template:`
//     <h1> My Goals </h1>
//     <p> My goal for today is {{goal}} </p>
//     `
// })
// export class AppComponent{
//   goal='watch game of thrones';
// }

//section C
     //component annotation
@Component({//component is used to add metadata to the component class
  selector: 'app-root',//define a selector for the component
  templateUrl: './app.component.html'//define the location of the template file
})
    //component definition
export class AppComponent {
title:'my app';
  // goals= [
  //      new Goal(1,'Watch Finding Nemo'),
  //      new Goal(2,'Buy Cookies'),
  //      new Goal(3, 'Get new Phone Case'),
  //      new Goal(4, 'Get Dog Food'),
  //      new Goal(5, 'Solve math homework'),
  //      new Goal(6, 'Plot my world domination plan'),
  //
  // ];


}
