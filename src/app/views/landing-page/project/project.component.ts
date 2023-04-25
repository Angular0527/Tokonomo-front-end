import { Component } from '@angular/core';
import { CONSTANT } from "../../../../constant/constant";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent {
  project_text = {
    first: "The space where",
    second: "projects meet their early investors"
  };

  project_rocket = {
    url: CONSTANT.PROJECT_ROCKET_URL,
    alt: CONSTANT.PROJECT_ROCKET_ALT
  };

  project_item_info = [
    {
      project_item_img: {
        url: CONSTANT.PROJECT_INVEST_URL,
        alt: CONSTANT.PROJECT_INVEST_ALT
      },

      project_item_description: {
        first: "Get early investment access",
        second: "to the great new tokens"
      },

      project_item_button_label: "Start investing"
    },

    {
      project_item_img: {
        url: CONSTANT.PROJECT_LAUNCH_URL,
        alt: CONSTANT.PROJECT_LAUNCH_ALT
      },

      project_item_description: {
        first: "Launch your project with",
        second: "IDO (Initial Dex Offering)"
      },

      project_item_button_label: "Launch project"
    },
  ]
}
