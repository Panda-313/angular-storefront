import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'sf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'my-storefront';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer
  ) {

    this.matIconRegistry.addSvgIcon(
      'custom-arrow',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow_icon.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'custom-basket',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/basket_icon.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'custom-client',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/client_icon.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'custom-wishlist',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/wishlist_icon.svg')
    );
  }
}
