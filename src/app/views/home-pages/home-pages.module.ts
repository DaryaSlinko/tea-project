import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePagesRoutingModule } from './home-pages-routing.module';
import {MainComponent} from "./main/main.component";
import {TeaFullProductCardComponent} from "./tea-full-product-card/tea-full-product-card.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    MainComponent,

    TeaFullProductCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HomePagesRoutingModule
  ],
  exports: [
    HomePagesRoutingModule
  ]
})
export class HomePagesModule { }
