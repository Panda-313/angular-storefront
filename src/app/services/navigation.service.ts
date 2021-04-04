import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {NavigationTheme} from "../modules/shared/types/navigation-theme.type";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  readonly navigationActiveTheme$ = new BehaviorSubject<NavigationTheme>('primary');
  constructor() { }
  //
  // get navigationTheme(): NavigationTheme {
  //   return this.navigationActiveTheme$.getValue();
  // }

  setAccentNavigationTheme(): void {
    this.navigationActiveTheme$.next('accent');
  }

  setPrimaryNavigationTheme(): void {
    this.navigationActiveTheme$.next('primary');
  }
}
