import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {NavigationService} from '../services/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationThemeResolver implements Resolve<boolean> {
  constructor(private navigationService: NavigationService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (state.url === '/shop') {
      this.navigationService.setAccentNavigationTheme();
    } else {
      this.navigationService.setPrimaryNavigationTheme();
    }

    return of(true);
  }
}
