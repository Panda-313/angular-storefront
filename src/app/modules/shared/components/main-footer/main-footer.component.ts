import {Component, OnInit, ChangeDetectionStrategy, HostBinding} from '@angular/core';

@Component({
  selector: 'sf-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainFooterComponent implements OnInit {
  @HostBinding('class') classes = 'container';

  constructor() { }

  ngOnInit(): void {
  }

}
