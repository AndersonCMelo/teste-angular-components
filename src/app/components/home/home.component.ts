import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';

import { SpmsIconComponent } from '@spms/angular-icons';
import { SPMSAngularIconsModule } from "@spms/angular-icons";

import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    SPMSAngularIconsModule,
    StepsModule,
  ]
})
export class HomeComponent implements OnInit {
  @ViewChild(SpmsIconComponent, { static: true }) iconComponents!: SpmsIconComponent

  disabled: boolean = true

  items: MenuItem[] | undefined;

  ngOnInit(): void {
    const icons = this.iconComponents.getSvg()

    this.items = [
      {
          label: 'Personal',
          routerLink: 'personal'
      },
      {
          label: 'Seat',
          routerLink: 'seat'
      },
      {
          label: 'Payment',
          routerLink: 'payment'
      },
      {
          label: 'Confirmation',
          routerLink: 'confirmation'
      }
    ];
  }
}
