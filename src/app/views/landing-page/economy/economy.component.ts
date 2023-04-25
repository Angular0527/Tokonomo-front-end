import { Component } from '@angular/core';
import { CONSTANT } from "../../../../constant/constant";

@Component({
  selector: 'app-economy',
  templateUrl: './economy.component.html',
  styleUrls: ['./economy.component.sass']
})
export class EconomyComponent {
  economy_star_info = {
    url: CONSTANT.ECONOMY_STAR_URL,
    alt: CONSTANT.ECONOMY_STAR_ALT
  }

  economy_image_info = {
    url: CONSTANT.ECONOMY_IMAGE_URL,
    alt: CONSTANT.ECONOMY_IMAGE_ALT
  }
}
