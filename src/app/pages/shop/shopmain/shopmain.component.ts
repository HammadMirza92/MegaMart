import { Component } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { end } from '@popperjs/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shopmain',
  templateUrl: './shopmain.component.html',
  styleUrls: ['./shopmain.component.scss']
})
export class ShopmainComponent {
  productData:any;
 

  constructor(private shopService:ShopService,private _snackBar: MatSnackBar,private formBuilder:FormBuilder) {
    this.shopService.callService().subscribe(
      (data) => {
        this.productData = data;
      },
      (error) => {
        // Handle the error here
        console.error('An error occurred:', error);
        this._snackBar.open('An error occurred while fetching the data. Please try again later.' , 'Dismiss', {
          horizontalPosition: end,
          duration: 1500,
        });
      }
    );
    
  }

  saveForm(){

  }
}
