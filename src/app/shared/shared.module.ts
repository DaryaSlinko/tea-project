import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {TextSlicePipePipe} from "./pipes/text-slice-pipe.pipe";
import {CustomValidator} from "./directives/customValidator";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TextSlicePipePipe,
    CustomValidator,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TextSlicePipePipe,
    CustomValidator,
  ]
})
export class SharedModule { }
