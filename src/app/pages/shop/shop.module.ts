import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopmainComponent } from './shopmain/shopmain.component';
import { ProductListComponent } from './product-list/product-list.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ShopmainComponent,
    ProductListComponent,
    
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ]
})
export class ShopModule { }
