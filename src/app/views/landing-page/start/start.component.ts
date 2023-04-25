import { Component } from '@angular/core';
import {CONSTANT} from "../../../../constant/constant";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.sass']
})
export class StartComponent {
  start_vector = {
    url: CONSTANT.START_CIRCLE_URL,
    alt: CONSTANT.START_CIRCLE_ALT
  };

  start_dashboard = {
    url: CONSTANT.START_DASHBOARD_URL,
    alt: CONSTANT.START_DASHBOARD_ALT
  }

  start_text_array = {
    large: { first: "Find the next bitcoin", second: "first on Tokonomo" },
    small: { first: "Tokonomo is where early adopters and investors find lively,", second: "imaginative tokens before they hit mainstream"}
  };
}
