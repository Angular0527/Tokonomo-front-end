import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.sass']
})
export class StartComponent {
  start_vector = {
    url: "../../assets/fi_start_vector.svg",
    alt: "special for Tokonomo"
  };

  start_dashboard = {
    url: "../../assets/fi_start_dashboard.svg",
    alt: "dashboard"
  }

  start_text_array = {
    large: { first: "Find the next bitcoin", second: "first on Tokonomo" },
    small: { first: "Tokonomo is where early adopters and investors find lively,", second: "imaginative tokens before they hit mainstream"}
  };
}
