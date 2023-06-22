import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopmainComponent } from './shopmain/shopmain.component';

const routes: Routes = [
  {path:'', component:ShopmainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
