import {Component, HostBinding, HostListener, Input, OnInit, SimpleChanges} from '@angular/core';
import {NAV_LINKS} from '../../consts/nav-links.const';
import {BehaviorSubject} from 'rxjs';
import {NavigationTheme} from '../../types/navigation-theme.type';

@Component({
  selector: 'sf-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  navLinks = NAV_LINKS;
  navbarOpened$ = new BehaviorSubject<boolean>(false);
  @HostBinding('class.sf-main-nav--accent') accent = false;
  @Input() set theme(theme: NavigationTheme | null) {
    this.accent = theme === 'accent';
    this._theme = theme;
  }

  get theme(): NavigationTheme | null {
    return this._theme;
  }

  // tslint:disable-next-line:variable-name
  private _theme: NavigationTheme | null = 'primary';

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const className = 'sf-main--active';
    if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
      document.getElementsByTagName('sf-main-nav')[0].classList.add(className);
    } else {
      document.getElementsByTagName('sf-main-nav')[0].classList.remove(className);
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  openNav(): void {
    this.navbarOpened$.next(true);
  }

  onCloseIconClick(): void {
    this.navbarOpened$.next(false);
  }
}
