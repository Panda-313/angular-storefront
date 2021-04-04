import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NAV_LINKS} from "../../consts/nav-links.const";

@Component({
  selector: 'sf-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationListComponent implements OnInit {
  @Output() closeIconClick = new EventEmitter<void>();
  navLinks = NAV_LINKS;

  constructor() {
  }

  ngOnInit(): void {
  }

  onCloseIconClick(): void {
    this.closeIconClick.emit();
  }

}
