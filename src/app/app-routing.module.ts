import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountStatmentComponent } from './components/account-statment/account-statment.component';
import { EnrollmentProfileComponent } from './components/enrollment-profile/enrollment-profile.component';
import { FinalSummaryComponent } from './components/final-summary/final-summary.component';
import { RegistrationSummaryComponent } from './components/registration-summary/registration-summary.component';
import { SelectionTrainingUnitsComponent } from './components/selection-training-units/selection-training-units.component';

const routes: Routes = [
  {path: '', component: EnrollmentProfileComponent},
  {path: 'registration-summary', component: RegistrationSummaryComponent},
  {path: 'account-statment', component: AccountStatmentComponent},
  {path: 'final-summary', component: FinalSummaryComponent},
  {path: 'selection-training-units', component: SelectionTrainingUnitsComponent},
  {path: '**', pathMatch:"full", component: EnrollmentProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
