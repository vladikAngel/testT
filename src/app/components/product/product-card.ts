import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../home/home.component";

@Component({
  selector: 'app-product',
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.scss']
})
export class ProductCard implements OnInit{
  @Input() product: IProduct;
  @Input() isAction?: boolean = false;
  constructor() {

  }
  ngOnInit() {

  }
}
