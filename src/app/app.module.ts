import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';//moved to routing module.ts
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import {FormsModule} from '@angular/forms';
import {AlertsService} from './alert-service/alerts.service';
import {HttpClientModule} from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { AboutComponent } from './about/about.component';//moved to routing module.ts
// import { RouterModule, Routes } from '@angular/router';//moved to routing module.ts
import { NotFoundComponent } from './not-found/not-found.component';// moved to routing module.ts
import {RoutingModule} from './routing/routing.module'

// Defining routes || moved to routing module.ts

// const routes:Routes=[
//   {path:"goals",component:GoalComponent},
//   {path:"about",component:AboutComponent},
//   {path:"",redirectTo:"/goals",pathMatch:"full"},
//   {path: '**',component:NotFoundComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
    NgProgressModule.forRoot(),// normal progress bar
    NgProgressHttpModule, // progress bar to load http requests
    // RouterModule.forRoot(routes)//replaced by RoutingModule
  ],
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
