import { Component } from '@angular/core';
import { CONSTANT } from "../../../../constant/constant";

@Component({
  selector: 'app-token-frame',
  templateUrl: './token-frame.component.html',
  styleUrls: ['./token-frame.component.sass']
})
export class TokenFrameComponent {
  trending_img_info = {
    url: CONSTANT.FRAME_ICON_URL,
    alt: CONSTANT.FRAME_ICON_ALT
  }

  token_item_list = [
    {id: 0, name: "KBOX"},
    {id: 1, name: "UNI"},
    {id: 2, name: "CRPT"},
    {id: 3, name: "CRPT "},
    {id: 4, name: "CRPT"},
    {id: 5, name: "CRPT"},
    {id: 6, name: "CRPT"},
    {id: 7, name: "CRPT"},
    {id: 8, name: "CRYPTO"},
    {id: 9, name: "INU"},
    {id: 10, name: "INU"},
    {id: 11, name: "INU"},
    {id: 12, name: "SOL"},
    {id: 13, name: "SOL"},
  ];
}
