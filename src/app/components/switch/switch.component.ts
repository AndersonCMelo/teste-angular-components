import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  data = {
    estado: false
  }

  onEstadoChange(event: boolean) {
    if (event === true) {
      this.data.estado = true
    } else {
      this.data.estado = false
    }
  }

  changeSwitch(event: boolean) {
    console.log(event)
  }

  handleConfig() {}

  handleLogout() {}
}
