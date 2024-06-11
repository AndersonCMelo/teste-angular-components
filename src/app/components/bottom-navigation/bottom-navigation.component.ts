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
    { label: 'home', icon: 'home', url: '/' },
    { label: 'users', icon: 'users', url: '/' },
    { label: 'reload', icon: 'reload', url: '/' },
  ]

  handleClick(event: eventProps)  {
    console.log('event', event);
  }
}
