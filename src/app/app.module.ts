import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ToolbarHeaderComponent } from './components/shared/toolbar-header/toolbar-header.component';
import { EnrollmentProfileComponent } from './components/enrollment-profile/enrollment-profile.component';
import { DynamicButtonComponent } from './components/shared/dynamic-button/dynamic-button.component';
import { RegistrationSummaryComponent } from './components/registration-summary/registration-summary.component';
import { AccountStatmentComponent } from './components/account-statment/account-statment.component';
import { FinalSummaryComponent } from './components/final-summary/final-summary.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MaterialUI imports
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// ModalRoot
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { CancelSgmmModalComponent } from './components/shared/modals/cancel-sgmm-modal/cancel-sgmm-modal.component';
import { CancellationNoticeSgmmModalComponent } from './components/shared/modals/cancellation-notice-sgmm-modal/cancellation-notice-sgmm-modal.component';
import { ClassDetailsModalComponent } from './components/shared/modals/class-details-modal/class-details-modal.component';
import { ConfirmScheduleModalComponent } from './components/shared/modals/confirm-schedule-modal/confirm-schedule-modal.component';
import { DynamicModalComponent } from './components/shared/modals/dynamic-modal/dynamic-modal.component';
import { SelectionTrainingUnitsComponent } from './components/selection-training-units/selection-training-units.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarHeaderComponent,
    EnrollmentProfileComponent,
    DynamicButtonComponent,
    RegistrationSummaryComponent,
    AccountStatmentComponent,
    FinalSummaryComponent,
    CancelSgmmModalComponent,
    CancellationNoticeSgmmModalComponent,
    ClassDetailsModalComponent,
    ConfirmScheduleModalComponent,
    DynamicModalComponent,
    SelectionTrainingUnitsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    NgbModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
