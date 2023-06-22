import { Component, Input } from '@angular/core';
import { IProduct, ProductType } from 'src/app/model/productModel.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input()productDataInput:IProduct[]=[];
  
  selectedColor: string = "white";
  variationProdiuctPrice:number = 0.00;
  productType = ProductType;


  constructor() {
   
    
  }

  selectColor(product: any) {
    this.selectedColor = product.option;
    this.variationProdiuctPrice = product.price;
  }

 
}
