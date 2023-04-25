import { Component } from '@angular/core';
import { CONSTANT } from "../../../../constant/constant";

@Component({
  selector: 'app-footer',
  templateUrl: './landing-footer.component.html',
  styleUrls: ['./landing-footer.component.sass']
})
export class LandingFooterComponent {
  footer_content = CONSTANT.FOOTER_CONTENT;

  logo_info = {
    url: CONSTANT.LOGO_INFO_URL,
    alt: CONSTANT.LOGO_INFO_ALT
  }

  twitter_info = {
    url: CONSTANT.FOOTER_TWITTER_URL,
    alt: CONSTANT.FOOTER_TWITTER_ALT
  }

  telegram_info = {
    url: CONSTANT.FOOTER_TELEGRAM_URL,
    alt: CONSTANT.FOOTER_TELEGRAM_ALT
  }

  facebook_info = {
    url: CONSTANT.FOOTER_FACEBOOK_URL,
    alt: CONSTANT.FOOTER_FACEBOOK_ALT
  }

  discord_info = {
    url: CONSTANT.FOOTER_DISCORD_URL,
    alt: CONSTANT.FOOTER_DISCORD_ALT
  }
}
