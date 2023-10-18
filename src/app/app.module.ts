import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/UI/header/header.component';
import { FooterComponent } from './components/UI/footer/footer.component';
import { ProductCard } from './components/product/product-card';
import { HomeComponent } from './components/home/home.component';
import {MatSelectModule} from "@angular/material/select";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { CardComponent } from './components/card/card.component';

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductCard,
    HomeComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatSelectModule,
    HttpClientModule,
    MatInputModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
