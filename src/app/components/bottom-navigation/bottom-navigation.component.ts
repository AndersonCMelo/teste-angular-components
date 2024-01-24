import { Component } from '@angular/core';

interface eventProps {
  id?: string
  label: string
  icon: string
}

@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss']
})
export class BottomNavigationComponent {
  myItems = [
    { id: '1', label: 'home', icon: 'home' },
    { label: 'users', icon: 'users' },
    { label: 'reload', icon: 'reload' },
  ]

  handleClick(event: eventProps)  {
    console.log('event', event);
  }
}
