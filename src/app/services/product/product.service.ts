import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProduct} from "../../components/home/home.component";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }
  getProductById(id: number) {
   return this.http.get<IProduct>('https://kupikolesa.it-trends.ru/api/product/'+ id)
  }
}
