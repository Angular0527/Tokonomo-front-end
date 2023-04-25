import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Launchpad',
    url: '/launchpad',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Launch IDO',
        url: '/launchpad/launch-ido'
      },
      {
        name: 'Manage IDO',
        url: '/base/breadcrumbs'
      },
      {
        name: 'Token List',
        url: '/base/cards'
      }
    ]
  },
  {
    name: 'Locker',
    url: '/locker',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Create Lock',
        url: '/buttons/buttons'
      },
      {
        name: 'Locked Tokens',
        url: '/buttons/button-groups'
      },
      {
        name: 'Locked LPs',
        url: '/buttons/dropdowns'
      }
    ]
  },
  {
    name: 'Your Account',
    url: '/account',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'Docs',
    url: '/docs',
    iconComponent: { name: 'cil-chart-pie' }
  }
];
