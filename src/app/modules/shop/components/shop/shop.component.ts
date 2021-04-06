import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Product} from '../../../shared/interfaces/product.interface';
import {SortOption} from '../../../shared/interfaces/sort-option.interface';
import {Router} from "@angular/router";

@Component({
  selector: 'sf-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopComponent implements OnInit {
  orderOptions: SortOption[] = [
    {
      value: 'newest',
      label: 'Newest'
    },
    {
      value: 'cheapest',
      label: 'Cheapest'
    }
  ];


  categoriesOptions: SortOption[] = [
    {
      value: 'all',
      label: 'All categories'
    },
    {
      value: 'candles',
      label: 'Candles'
    },
    {
      value: 'macrame',
      label: 'Macrame'
    },
    {
      value: 'posters',
      label: 'Posters'
    },
  ];

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
    },{
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
    },{
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
    },
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onProductCardClick(product: Product): void {
    this.router.navigate(['product', product.productId])
  }
}
