import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Product} from "../../../shared/interfaces/product.interface";

@Component({
  selector: 'sf-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
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
