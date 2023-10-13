import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/UI/header/header.component';
import { FooterComponent } from './components/UI/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
