import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Product} from "../../../shared/interfaces/product.interface";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'sf-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
  @Input() product?: Product;
  quantityControl = new FormControl(1, [Validators.min(1), Validators.max(10)]);

}
