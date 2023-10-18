import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProductCard} from "./components/product/product-card";
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product', component: ProductCard},
  {path: 'card', component: CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
