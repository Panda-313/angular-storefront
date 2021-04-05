import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sf-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
