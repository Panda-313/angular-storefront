import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Product} from "../../../shared/interfaces/product.interface";

@Component({
  selector: 'sf-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartPageComponent implements OnInit {
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
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
