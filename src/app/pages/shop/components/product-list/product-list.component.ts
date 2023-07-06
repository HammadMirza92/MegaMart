import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { end } from '@popperjs/core';
import { IProduct, ProductType } from 'src/app/model/productModel.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input()productDataInput:IProduct[]=[];
  
  selectedColor: string = "";
  selectedProductId:string= "";
  variationProductPrice:number = 0.00;
  productType = ProductType;
  optionId:string= "";
  constructor(private _snackBar: MatSnackBar) {
   
  }


  selectColor(option: any,product:any) {
    console.log(product.id)
    this.selectedColor = option.option;
    this.variationProductPrice = option.price;
    this.optionId = product.variations[0].id;
  }

 
 
  orderSimple(Item:any){
    console.log("prpoduct is ",Item);
  }
  orderVariation(Item:any){
    
    if(this.selectedColor == ""){
      this._snackBar.open('Please Select Any color' , 'Dismiss', {
        horizontalPosition: end,
        duration: 1500,
      });
      console.log("enter in the statment");
      return;
    }
    console.log("prpoduct is ",Item);
    console.log("Select cat is",this.selectedColor);
  }
}
