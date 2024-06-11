import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'novo-teste-angular';

  menuItems = [
    {
      title: 'Início',
      icon: 'home',
      url: '/'
    },
    {
      title: 'Administração',
      icon: 'admin',
      children: [
        {
          title: 'Criar Lista de Utentes',
          icon: 'view-card',
          url: '/Components/Tabs',
        },
        {
          title: 'Equipas',
          icon: 'view-card',
          url: '/Components/Tabs',
          children: [
            {
              title: 'Equipa 1',
              icon: 'view-card',
              url: '/Icons',
            },
            {
              title: 'Equipa 2',
              icon: 'view-card',
              url: '/',
            },
          ],
        },
        {
          title: 'Histórico de Transferências',
          icon: 'view-card',
          url: '/',
        },
      ]
    },
    {
      title: 'Componentes',
      icon: 'components',
      children: [
        {
          title: 'Accordion',
          icon: 'view-card',
          url: '/accordion',
        },
        {
          title: 'Autocomplete',
          icon: 'view-card',
          url: '/autocomplete',
        },
        {
          title: 'Avatar',
          icon: 'view-card',
          url: '/avatar',
        },
        {
          title: 'Bottom navigation',
          icon: 'view-card',
          url: '/bottom-navigation',
        },
        {
          title: 'Breadcrumb',
          icon: 'view-card',
          url: '/breadcrumb',
        },
        {
          title: 'Button',
          icon: 'view-card',
          url: '/button',
        },
        {
          title: 'Checkbox',
          icon: 'view-card',
          url: '/checkbox',
        },
        {
          title: 'Chips',
          icon: 'view-card',
          url: '/chips',
        },
        {
          title: 'Divider',
          icon: 'view-card',
          url: '/divider',
        },
        {
          title: 'Pagination',
          icon: 'view-card',
          url: '/pagination',
        },
        {
          title: 'Radio button',
          icon: 'view-card',
          url: '/radio-button',
        },
        {
          title: 'Stepper',
          icon: 'view-card',
          url: '/stepper',
        },
        {
          title: 'Switch',
          icon: 'view-card',
          url: '/switch',
        },
        {
          title: 'Table',
          icon: 'view-card',
          url: '/table',
        },
        {
          title: 'Tabs',
          icon: 'view-card',
          url: '/tabs',
        },
        {
          title: 'Text Input',
          icon: 'view-card',
          url: '/text-input',
        },
        {
          title: 'Transfer list',
          icon: 'view-card',
          url: '/transfer-list',
        },
        {
          title: 'Tree',
          icon: 'view-card',
          url: '/tree',
        },
      ]
    },
    {
      title: 'Identificação',
      icon: 'identification',
      url: '/'
    },
  ]

  menuOptions = {
    opened: true,
    link: '/',
    logo: {
      fontIcon: 'spms',
      size: '150px',
      color: 'primary',
    },
    smallLogo: {
      fontIcon: 'spms-icon',
      size: '50px',
      color: 'primary',
    },
    ticket: {
      title: 'Está com dúvidas?',
      titleVariant: 'Ticket',
      url: '',
      icon: 'ticket-icon',
      description: 'Crie o seu Ticket ou Pedido aqui',
    },
  }

  handleConfig() {}

  handleLogout() {}

  handleNavigate(event: any) {
    console.log('event', event)
  }
}
