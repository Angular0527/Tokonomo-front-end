import { Component } from '@angular/core';
import { CONSTANT } from '../../../constant/constant'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  logo_info = {
    url: CONSTANT.LOGO_INFO_URL,
    alt: CONSTANT.LOGO_INFO_ALT
  }
}
