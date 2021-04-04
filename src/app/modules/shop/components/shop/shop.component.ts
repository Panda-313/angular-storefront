import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Product} from "../../../shared/interfaces/product.interface";

@Component({
  selector: 'sf-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopComponent implements OnInit {
  mockedProducts: Product[] = [
    {
      productPrice: 20.99,
      productTitle: 'First product',
      productImageAlt: 'description',
      productImageSrc: 'https://place-hold.it/365x425',
      productId: 'fea'
    },
    {
      productPrice: 25.99,
      productTitle: 'Second product',
      productImageAlt: 'description2',
      productImageSrc: 'https://place-hold.it/365x425',
      productId: 'fea'
    },
    {
      productPrice: 32.99,
      productTitle: 'Third product',
      productImageAlt: 'description3',
      productImageSrc: 'https://place-hold.it/365x425',
      productId: 'fea'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
