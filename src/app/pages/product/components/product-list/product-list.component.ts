import { Component } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { ProductModel } from 'src/app/model/productModel.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  productData:any;
  selectedColor: string = "white";

  selectColor(color: string) {
    this.selectedColor = color;
  }

  constructor(private prodService:ProductServiceService) {

    
  }

  callService(){
    this.prodService.callService().subscribe((data)=>{
      this.productData = data
    });
  }
}
