import { Component, Input } from '@angular/core';
import { Goal } from 'src/app/interfaces/goal';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.scss']
})
export class GoalListComponent {

@Input() goalList:Goal[]=[]

}
