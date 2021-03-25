import {Component, HostBinding, OnInit} from '@angular/core';
import {NAV_LINKS} from "../../consts/nav-links.const";

@Component({
  selector: 'sf-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  @HostBinding('class') classes = 'container';
  navLinks = NAV_LINKS;

  constructor() { }

  ngOnInit(): void {
  }

}
