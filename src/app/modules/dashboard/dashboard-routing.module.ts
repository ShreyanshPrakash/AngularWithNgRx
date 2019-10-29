import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  DashboardComponent,
  OverviewComponent,
  ManageComponent,
  CallRequestComponent,
  ProcessComponent,
  SoldProductsComponent,
  ReviewComponent
} from 'src/app/components/dashboard';


const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'manage', component: ManageComponent },
      { path: 'requests', component: CallRequestComponent },
      { path: 'process', component: ProcessComponent },
      { path: 'products', component: SoldProductsComponent },
      { path: 'reviews', component: ReviewComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
