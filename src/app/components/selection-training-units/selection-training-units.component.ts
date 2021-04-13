import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-selection-training-units',
  templateUrl: './selection-training-units.component.html',
  styleUrls: ['./selection-training-units.component.scss'],
})
export class SelectionTrainingUnitsComponent implements OnInit {
  showFiller = false;
  toggle = false;
  arrowChange = 'arrow_forward_ios';

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  constructor(config: NgbNavConfig, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    // customize default values of navs used by this component tree
    config.destroyOnHide = false;
    config.roles = false;

    // sidenav mobile
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  
  ngOnInit(): void {}

  expandSidebar() {
    this.toggle = !this.toggle;
    console.log(this.toggle);
    this.arrowChange = this.toggle ? 'arrow_back_ios_new' : 'arrow_forward_ios';
  }
}
