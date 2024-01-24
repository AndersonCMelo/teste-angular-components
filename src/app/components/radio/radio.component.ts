import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent {
  form = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
  })

  changeRadio(event: string) {
    console.log('event', event);
  }
}
