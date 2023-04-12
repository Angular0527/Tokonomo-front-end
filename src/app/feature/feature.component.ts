import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.sass']
})
export class FeatureComponent {
  feature_desc = {
    first: "Features that make the fundraising process",
    second: "simple as 1-2-3"
  };

  feature_portfolio = {
    url: "../../assets/fi_feature_investor_portfolio.svg",
    alt: "portfolio for investor"
  };

  feature_chat = {
    url: "../../assets/fi_feature_investor_chat.svg",
    alt: "chat for investor"
  };

  feature_portfolio_desc = {
    title: "Portfolio Tracking",
    desc1: "Track changes in your assets",
    desc2: "from investments made"
  }

  feature_chat_desc = {
    title: "Automatic projects scanner",
    desc1: "Estimate the risk of project's",
    desc2: "fraud based on mathematical",
    desc3: "factors before investing in"
  }
}
