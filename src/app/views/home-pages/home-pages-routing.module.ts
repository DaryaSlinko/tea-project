import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {TeaFullProductCardComponent} from "./tea-full-product-card/tea-full-product-card.component";


const routes: Routes = [
  {path: "", component: MainComponent},
  {path: "tea-product/:id", component: TeaFullProductCardComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePagesRoutingModule { }
