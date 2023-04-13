import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.sass']
})
export class FeatureComponent {
  feature_portfolio = {
    url: "../../assets/fi_feature_investor_portfolio.svg",
    alt: "portfolio for investor"
  };

  feature_chat = {
    url: "../../assets/fi_feature_investor_chat.svg",
    alt: "chat for investor"
  };

  feature_kyc = {
    url: "../../assets/fi_kyc.svg",
    alt: "image of kyc"
  };

  feature_$ = {
    url: "../../assets/fi_feature_$.svg",
    alt: "image of $"
  };

  feature_lock = {
    url: "../../assets/fi_feature_lock.svg",
    alt: "image of lock"
  };
}
