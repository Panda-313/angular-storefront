import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoLineTitleComponent } from './two-line-title.component';

describe('TwoLineTitleComponent', () => {
  let component: TwoLineTitleComponent;
  let fixture: ComponentFixture<TwoLineTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoLineTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoLineTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
