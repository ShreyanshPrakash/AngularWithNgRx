import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { 
    path: 'dashboard', 
    loadChildren: () => import('./modules/dashboard/dashboard.module').then( m => m.DashboardModule )
  },
  {
    path: 'settings',
    loadChildren: () => import('./modules/settings/settings.module').then( m => m.SettingsModule )
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
