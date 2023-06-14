import { Component } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  productData:any;
  constructor(private prodService:ProductServiceService) {

    
  }

  callService(){
    this.prodService.callService().subscribe((data)=>{
      this.productData = data
    });
  }
}
