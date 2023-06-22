import { Component } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { end } from '@popperjs/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  productData:any;
  selectedColor: string = "white";
  variationProdiuctPrice:number = 0.00;


  selectColor(product: any) {
    this.selectedColor = product.option;
    this.variationProdiuctPrice = product.price;
  }

  constructor(private prodService:ProductServiceService,private _snackBar: MatSnackBar,) {
    this.prodService.callService().subscribe(
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

  // callService() {
  //   this.prodService.callService().subscribe(
  //     (data) => {
  //       this.productData = data;
  //     },
  //     (error) => {
  //       // Handle the error here
  //       console.error('An error occurred:', error);
  //       this._snackBar.open('An error occurred while fetching the data. Please try again later.' , 'Dismiss', {
  //         horizontalPosition: end,
  //         duration: 1500,
  //       });
  //     }
  //   );
  // }
}
