import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
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
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private deviceService: DeviceDetectorService
  ) {
    this.mobileQuery = media.matchMedia('(orientation: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
    this.isMobile = deviceService.isMobile();
    // this.isMobile = true;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

}
