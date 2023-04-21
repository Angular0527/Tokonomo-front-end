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

  dashboard_ido_image = {
    url: CONSTANT.DASHBOARD_IDO_URL,
    alt: CONSTANT.DASHBOARD_ALT
  }

  dashboard_ido_pencil_image = {
    url: CONSTANT.DASHBOARD_IDO_PENCIL_URL,
    alt: CONSTANT.DASHBOARD_IDO_PENCIL_ALT
  }

  dashboard_ido_start_image = {
    url: CONSTANT.DASHBOARD_IDO_START_URL,
    alt: CONSTANT.DASHBOARD_IDO_START_ALT
  }

  dashboard_ido_up_image = {
    url: CONSTANT.DASHBOARD_IDO_UP_URL,
    alt: CONSTANT.DASHBOARD_IDO_UP_ALT
  }

  pro_item_list = [
    {}
  ];
}
