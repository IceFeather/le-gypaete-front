import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  langue = 'fr';

  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;
  isMobile: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {
    breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe( breakpoint => this.isMobile = breakpoint.matches )
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

}
