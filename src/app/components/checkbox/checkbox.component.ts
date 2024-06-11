import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent {
  checked: 'yes' | 'no' = 'no' // 'yes | 'no'

  handleChange(event: any) {
    console.log('handleChange', event)
  }

  handleChangeOptions(event: any) {
    console.log('handleChangeOptions', event)
  }
}
