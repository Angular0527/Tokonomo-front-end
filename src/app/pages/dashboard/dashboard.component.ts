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

  dashboard_ann_image = {
    url: CONSTANT.DASHBOARD_ANN_URL,
    alt: CONSTANT.DASHBOARD_ANN_ALT
  }

  dashboard_vector_image = {
    url: CONSTANT.DASHBOARD_VECTOR_URL,
    alt: CONSTANT.DASHBOARD_VECTOR_ALT
  }

  pro_item_list = [
    {}
  ];
}
