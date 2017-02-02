import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoolComponent } from './pool.component';

const routes: Routes = [
  { path: '', component: PoolComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
