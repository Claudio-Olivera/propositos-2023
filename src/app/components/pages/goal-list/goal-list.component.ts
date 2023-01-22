import { Component, Input } from '@angular/core';
import { Goal } from 'src/app/interfaces/goal';
import { faTrashCan,faSquareCheck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.scss']
})
export class GoalListComponent {
  faTrashCan=faTrashCan
  faSquareCheck = faSquareCheck

@Input() goalList:Goal[]=[]

  changeToComplete(goal:Goal){
   goal.completed =! goal.completed
  }

  deleteGoal(goal:Goal){
    let pos = this.goalList.indexOf(goal)
    this.goalList.splice(pos,1) 
  }
}
