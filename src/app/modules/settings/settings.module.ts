import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';

import {
  SettingsComponent,
  RegisteredDetailsComponent,
  ManageEmployeesComponent,
  DefaultControlComponent,
  BannersComponent
} from 'src/app/components/settings';


@NgModule({
  declarations: [
    SettingsComponent,
    RegisteredDetailsComponent,
    ManageEmployeesComponent,
    DefaultControlComponent,
    BannersComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
