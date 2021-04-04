import {Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {NAV_LINKS} from "../../consts/nav-links.const";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'sf-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  navLinks = NAV_LINKS;
  navbarOpened$ = new BehaviorSubject<boolean>(false);
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const className = 'sf-main--active';
    if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
      document.getElementsByTagName('sf-main-nav')[0].classList.add(className);
    } else {
      document.getElementsByTagName('sf-main-nav')[0].classList.remove(className);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  openNav(): void {
    this.navbarOpened$.next(true);
  }

  onCloseIconClick(): void {
    this.navbarOpened$.next(false);
  }
}
