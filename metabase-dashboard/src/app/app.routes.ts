import { Routes } from '@angular/router';
import { MetabaseDashboardComponent } from './metabase-dashboard/metabase-dashboard.component';

export const routes: Routes = [
  { path: '', component: MetabaseDashboardComponent },
  { path: 'dashboard', component: MetabaseDashboardComponent }
];
