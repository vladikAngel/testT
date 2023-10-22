import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../services/product/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IProduct} from "../home/home.component";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  countProducts: number = 1;
  product: IProduct ;

  constructor(private ProductService: ProductService, private router: ActivatedRoute) {
  }
     ngOnInit() {
       this.getProductById()

     }
     getProductById() {
       this.router.params.subscribe(x =>{
         this.ProductService.getProductById(x['id']).subscribe(product => {
           this.product = product;
           console.log(this.product)
         })
       })

     }
}
