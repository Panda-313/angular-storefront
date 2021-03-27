import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sf-contact-info-card',
  templateUrl: './contact-info-card.component.html',
  styleUrls: ['./contact-info-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactInfoCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
