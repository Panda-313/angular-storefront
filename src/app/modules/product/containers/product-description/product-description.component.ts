import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'sf-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDescriptionComponent implements OnInit {
  quantityControl = new FormControl(1, [Validators.min(1), Validators.max(10)]);

  constructor() { }

  ngOnInit(): void {
  }

  onActionBtnClick(): void {

  }
}
