import { Component } from '@angular/core';
import { Goal } from '../../interfaces/goal';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-goal-form',
  templateUrl:'./goal-form.component.html',
  styleUrls: ['./goal-form.component.scss']
})
export class GoalFormComponent {

  goalList:Goal[] = []
  newGoalname=''
  supa
  constructor(supa:SupabaseService){
  this.supa = supa
}

   onSubmit(formValid: boolean) {
    if(formValid){
      this.supa.uploadGoal(this.newGoalname)
      this.goalList.push({
        name : this.newGoalname,
        completed: false
       }) 
      this.newGoalname = "";
    }
  }
}
