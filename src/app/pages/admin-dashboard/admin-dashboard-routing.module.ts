import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./adminScreens/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./adminScreens/product/product.module').then(m => m.ProductModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
