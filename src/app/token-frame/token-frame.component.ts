import { Component } from '@angular/core';

@Component({
  selector: 'app-token-frame',
  templateUrl: './token-frame.component.html',
  styleUrls: ['./token-frame.component.sass']
})
export class TokenFrameComponent {
  trending_img = "../../assets/fi_trending-up.svg";

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
