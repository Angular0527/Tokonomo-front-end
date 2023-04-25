import { Component } from '@angular/core';

import { navItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.sass']
})
export class DefaultLayoutComponent {

  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {}
}
