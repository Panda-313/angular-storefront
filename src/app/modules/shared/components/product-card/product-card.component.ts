import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {Product} from "../../interfaces/product.interface";

@Component({
  selector: 'sf-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Input() showActionBtn = false;
  @Input() showAddToFavoritesBtn = false;
  @Input() actionBtnText = '';
  @Output() clickActionBtn = new EventEmitter<Product>();
  @Output() clickAddToFavoritesBtn = new EventEmitter<Product>();
  @Output() productCardClick = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onActionBtnClick(): void {
    this.clickActionBtn.emit(this.product);
  }

  onAddToFavoritesBtnClick(): void {
    this.clickAddToFavoritesBtn.emit(this.product);
  }

  onProductCardClick(): void {
    this.productCardClick.emit(this.product);
  }
}
