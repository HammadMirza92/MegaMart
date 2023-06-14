import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/core/service/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpConfigService) { }

  callService(){
    return this.http.get("product");
  }

}
