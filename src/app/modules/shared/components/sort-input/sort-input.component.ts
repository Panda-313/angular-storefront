import {ChangeDetectionStrategy, Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {SortOption} from "../../interfaces/sort-option.interface";

@Component({
  selector: 'sf-sort-input',
  templateUrl: './sort-input.component.html',
  styleUrls: ['./sort-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SortInputComponent), multi: true
    }
  ]
})
export class SortInputComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() label = '';
  @Input() options: SortOption[] = [];
  ngUnsubscribe$ = new Subject<void>();
  formControl = new FormControl();
  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  registerOnChange(fn: any): void {
    this.formControl.valueChanges.pipe(takeUntil(this.ngUnsubscribe$)).subscribe(fn);
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }

}
