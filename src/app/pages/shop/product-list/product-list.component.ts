import { Component, Input } from '@angular/core';
import { IProduct, ProductType } from 'src/app/model/productModel.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  selectedColor: string = "white";
  variationProdiuctPrice:number = 0.00;
  productType = ProductType;

  
  selectColor(product: any) {
    this.selectedColor = product.option;
    this.variationProdiuctPrice = product.price;
  }

  @Input()productDataInput:IProduct[]=[];
}
