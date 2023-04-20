import { Component } from '@angular/core';
import { CONSTANT } from "../../../constant/constant";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {
  dashboard_image = {
    url: CONSTANT.DASHBOARD_URL,
    alt: CONSTANT.DASHBOARD_ALT
  }
}
