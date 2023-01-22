import { Component } from '@angular/core';
import { Goal } from 'src/app/interfaces/goal';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.scss']
})
export class GoalFormComponent {

  goalList:Goal[] = []
  newGoalname=''

  saveGoal(){
    this.goalList.push({
     name : this.newGoalname,
     completed: false
    })
  }
}