import { TestBed } from '@angular/core/testing';

import { NavigationThemeResolver } from './navigation-theme.resolver';

describe('NavigationThemeResolver', () => {
  let resolver: NavigationThemeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(NavigationThemeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
