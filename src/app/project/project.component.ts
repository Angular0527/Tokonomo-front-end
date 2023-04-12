import { Component } from '@angular/core';

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
    url: "../../assets/fi_project_rocket.svg",
    alt: "rocket image"
  };

  project_item_info = [
    {
      project_item_img: {
        url: "../../assets/fi_project_item_invest.svg",
        alt: "investing img"
      },

      project_item_description: {
        first: "Get early investment access",
        second: "to the great new tokens"
      },

      project_item_button_label: "Start investing"
    },

    {
      project_item_img: {
        url: "../../assets/fi_project_item_launch.svg",
        alt: "launch img"
      },

      project_item_description: {
        first: "Launch your project with",
        second: "IDO (Initial Dex Offering)"
      },

      project_item_button_label: "Launch project"
    },
  ]
}
