import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { 
  SettingsComponent, 
  BannersComponent, 
  DefaultControlComponent,
  ManageEmployeesComponent,
  RegisteredDetailsComponent,
  } from 'src/app/components/settings';


const routes: Routes = [
  { 
    path: '', component: SettingsComponent ,
    children: [
      { path: 'banners', component: BannersComponent },
      { path: 'controls', component: DefaultControlComponent },
      { path: 'employees', component: ManageEmployeesComponent },
      { path: 'details', component: RegisteredDetailsComponent }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
