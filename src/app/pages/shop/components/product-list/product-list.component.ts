import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { end } from '@popperjs/core';
import { IProduct, ProductType } from 'src/app/model/productModel.interface';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input()productDataInput:IProduct[]=[];
  filteredData: any;
   
  selectedColor: string = "";
  selectedProductId:string= "";
  variationProductPrice:number = 0.00;
  productType = ProductType;
  optionId:string= "";

  currentPage: number = 1;
  itemsPerPage: number = 10;


  constructor(private _snackBar: MatSnackBar) {
    
  }

  selectColor(option: any,product:any) {
    console.log(product.id)
    this.selectedColor = option.option;
    this.variationProductPrice = option.price;
    this.optionId = product.variations[0].id;
  }
  ngOnInit() {
    this.filteredData = [...this.productDataInput];
    console.log("filter data is ," ,this.filteredData)
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


  getPageNumbers(): number[] {
    const totalPages = Math.ceil(this.filteredData.length / this.itemsPerPage);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
  }

  totalPages(): number {
    return Math.ceil(this.filteredData.length / this.itemsPerPage);
  }


}
