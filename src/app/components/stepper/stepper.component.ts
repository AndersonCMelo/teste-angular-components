import { Component } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  step: number = 1
  steps: number = 6
  items: string[] = [
		'Select campaign settings',
		'Create an ad group',
		'Create an ad',
		'Last step',
	]

  handleBack() {
    this.step = this.step - 1
  }

  handleNext() {
    this.step = this.step + 1
  }
}
