import { Component } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  step: number = 0
  steps: number = 6

  handleBack() {
    this.step = this.step - 1
  }

  handleNext() {
    console.log('next')

    this.step = this.step + 1
  }

  stepString: number = 1
  stepsString: number = 4
  items: string[] = [
		'First step',
		'Step 2',
		'Step 3',
		'Last step',
	]

  handleBackString() {
    this.stepString = this.stepString - 1
  }

  handleNextString() {
    this.stepString = this.stepString + 1
  }
}
