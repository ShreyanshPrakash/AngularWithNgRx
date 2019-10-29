import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import {
  DashboardComponent,
  OverviewComponent,
  ManageComponent,
  ReviewComponent,
  ProcessComponent,
  SoldProductsComponent,
  CallRequestComponent
} from 'src/app/components/dashboard';


@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    ManageComponent,
    ReviewComponent,
    ProcessComponent,
    SoldProductsComponent,
    CallRequestComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
