import { Component } from '@angular/core';
import { CONSTANT} from "../constant/constant";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'TOKONOMO';

  isSignIn = CONSTANT.IS_SIGN_IN;
}
