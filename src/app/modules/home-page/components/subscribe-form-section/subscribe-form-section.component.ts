import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'sf-subscribe-form-section',
  templateUrl: './subscribe-form-section.component.html',
  styleUrls: ['./subscribe-form-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubscribeFormSectionComponent implements OnInit {
  emailControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
