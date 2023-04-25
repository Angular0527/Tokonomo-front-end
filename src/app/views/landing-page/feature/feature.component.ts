import { Component } from '@angular/core';
import { CONSTANT } from "../../../../constant/constant";

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.sass']
})
export class FeatureComponent {
  feature_portfolio = {
    url: CONSTANT.FEATURE_PORTFOLIO_URL,
    alt: CONSTANT.FEATURE_PORTFOLIO_ALT
  };

  feature_chat = {
    url: CONSTANT.FEATURE_CHAT_URL,
    alt: CONSTANT.FEATURE_CHAT_ALT
  };

  feature_kyc = {
    url: CONSTANT.FEATURE_KYC_URL,
    alt: CONSTANT.FEATURE_KYC_ALT
  };

  feature_$ = {
    url: CONSTANT.FEATURE_$_URL,
    alt: CONSTANT.FEATURE_$_ALT
  };

  feature_lock = {
    url: CONSTANT.FEATURE_LOCK_URL,
    alt: CONSTANT.FEATURE_LOCK_ALT
  };
}
