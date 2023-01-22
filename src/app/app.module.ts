import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';

import { TaskComponent } from './components/task/task.component';

import { FormsModule } from '@angular/forms';
import { GoalListComponent } from './components/pages/goal-list/goal-list.component';
import { GoalFormComponent } from './components/pages/goal-form/goal-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TaskComponent,
    GoalListComponent,
    GoalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
