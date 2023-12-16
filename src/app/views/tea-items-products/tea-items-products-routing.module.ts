import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeaCollectionsComponent} from "./tea-collections/tea-collections.component";

const routes: Routes = [
  {path: "tea-collections", component: TeaCollectionsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeaItemsProductsRoutingModule { }
