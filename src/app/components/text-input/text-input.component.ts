import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  append = `<spms-icon fontIcon="search" />`
  prepend = `<span>€</span>`

  inputValue = 'initial value'

  myForm!: FormGroup

  stateName: 'success' | 'error' | 'disabled' | 'info' | 'read-only' | undefined = undefined
  hintNameMessage = ''
  stateEmail: 'success' | 'error' | 'disabled' | 'info' | 'read-only' | undefined = undefined
  hintEmailMessage = ''

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  change(event: string) {
    console.log('event', event)
  }

  changeInput(event: string) {
    this.inputValue = event
  }

  handleClick() {
    this.inputValue = ''
  }

  changeReactiveName(event: string) {
    if (event !== '') {
      this.hintNameMessage = ''
      this.stateName = undefined
    }
  }

  changeReactiveEmail(event: string) {
    if (event !== '') {
      this.hintEmailMessage = ''
      this.stateEmail = undefined
    }
  }

  ngSubmitReactive() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      console.log('Form is invalid');

      // @ts-ignore
      if (this.myForm.get('name')?.errors && this.myForm.get('name').errors.required) {
        this.hintNameMessage = 'Campo obrigatório'
        this.stateName = 'error'
      } else {
        this.hintNameMessage = ''
        this.stateName = undefined
      }

      // @ts-ignore
      if (this.myForm.get('email')?.errors && this.myForm.get('email').errors.required) {
        this.hintEmailMessage = 'Campo obrigatório'
        this.stateEmail = 'error'
        // @ts-ignore
      } else if (this.myForm.get('email')?.errors && this.myForm.get('email').errors.email) {
        this.hintEmailMessage = 'Email inválido'
        this.stateEmail = 'error'
      } else {
        this.hintEmailMessage = ''
        this.stateEmail = undefined
      }
    }
  }
}
