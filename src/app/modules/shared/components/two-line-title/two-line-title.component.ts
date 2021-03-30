import {Component, OnInit, ChangeDetectionStrategy, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'sf-two-line-title',
  templateUrl: './two-line-title.component.html',
  styleUrls: ['./two-line-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoLineTitleComponent implements OnInit {
  @HostBinding('class.primary') @Input() primary = true;
  @HostBinding('class.secondary') @Input() secondary = false;

  constructor() { }

  ngOnInit(): void {
  }

}
