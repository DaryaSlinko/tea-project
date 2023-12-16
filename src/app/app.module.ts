import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";


import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TeaItemsProductsModule} from "./views/tea-items-products/tea-items-products.module";
import {OrderModule} from "./views/order/order.module";
import {HomePagesModule} from "./views/home-pages/home-pages.module";
import {SharedModule} from "./shared/shared.module";




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    TeaItemsProductsModule,
    OrderModule,
    HomePagesModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
