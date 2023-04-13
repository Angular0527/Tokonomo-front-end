import { Component } from '@angular/core';
import { CONSTANT } from "../../../constant/constant";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  footer_content = CONSTANT.FOOTER_CONTENT;
}
