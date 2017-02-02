import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pool', loadChildren: './games/pool/pool.module#PoolModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
