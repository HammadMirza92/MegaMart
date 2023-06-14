import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpConfigService {

  baseURL = environment.baseUrl;
  constructor(private http:HttpClient) { }

  get(url:string){
    return this.http.get(`${this.baseURL}${url}`);
  }
  post(url:string, data:any){
    return this.http.post(`${this.baseURL}${url}`,data);
  }
}
