import { Component } from '@angular/core';
import { CONSTANT } from "../../../../constant/constant";

@Component({
  selector: 'app-launch-ido',
  templateUrl: './launch-ido.component.html',
  styleUrls: ['./launch-ido.component.sass']
})
export class LaunchIdoComponent {
  launch_logo_image = {
    url: CONSTANT.DASHBOARD_LAUNCH_LOGO_URL,
    alt: CONSTANT.DASHBOARD_LAUNCH_LOGO_ALT
  }

  launch_progress_item = [
    {id: 2, title: "DeFi Launchpad info", desc: "Enter details about your fundrasing campaing", connect: 1},
    {id: 3, title: "Project Info", desc: "let people know more about your project", connect: 1},
    {id: 4, title: "Finish", desc: "Review your information", connect: 0},
  ]
}
