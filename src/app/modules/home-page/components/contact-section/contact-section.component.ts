import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sf-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactSectionComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
