import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeFormSectionComponent } from './subscribe-form-section.component';

describe('SubscribeFormSectionComponent', () => {
  let component: SubscribeFormSectionComponent;
  let fixture: ComponentFixture<SubscribeFormSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeFormSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
