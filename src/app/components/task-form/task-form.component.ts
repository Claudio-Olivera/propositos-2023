import { Component } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {

  inputGoal: string | undefined;

  onSubmit(formValid: boolean) {
    if(formValid){
    console.log(this.inputGoal);
    this.inputGoal = "";
    // Aquí puede agregar cualquier lógica adicional para enviar el texto ingresado, como una llamada a un servicio.
    }
  }

}
