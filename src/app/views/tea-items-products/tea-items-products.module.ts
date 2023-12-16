import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeaItemsProductsRoutingModule } from './tea-items-products-routing.module';
import {TeaCollectionsComponent} from "./tea-collections/tea-collections.component";
import {TeaItemComponent} from "./tea-item/tea-item.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    TeaCollectionsComponent,
    TeaItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    TeaItemsProductsRoutingModule
  ],
  exports: [
    TeaItemsProductsRoutingModule
  ]
})
export class TeaItemsProductsModule { }
