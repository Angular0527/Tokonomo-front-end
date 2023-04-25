import { Component } from '@angular/core';
import { CONSTANT } from '../../../../constant/constant';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.sass']
})
export class LandingHeaderComponent {
  logo_info = {
    url: CONSTANT.LOGO_INFO_URL,
    alt: CONSTANT.LOGO_INFO_ALT
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
