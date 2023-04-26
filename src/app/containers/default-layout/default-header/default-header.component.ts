import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import {CONSTANT} from "../../../../constant/constant";

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.sass']
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  constructor(private classToggler: ClassToggleService) {
    super();
  }

  bsc_info = {
    url: CONSTANT.HEADER_BSC_URL,
    alt: CONSTANT.HEADER_BSC_ALT
  }

  wallet_info = {
    url: CONSTANT.HEADER_WALLET_URL,
    alt: CONSTANT.HEADER_WALLET_ALT
  }

  user_info = {
    url: CONSTANT.HEADER_USER_URL,
    alt: CONSTANT.HEADER_USER_ALT
  }
}
