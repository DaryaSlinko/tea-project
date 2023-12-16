import {Component, OnInit} from '@angular/core';
import {TeaProductsType} from "../../../../types/teaProducts.type";
import {GetProductsService} from "../../../shared/services/get-products.service";


@Component({
  selector: 'TeaCollectionsComponent',
  templateUrl: './tea-collections.component.html',
  styleUrls: ['./tea-collections.component.scss']
})
export class TeaCollectionsComponent implements OnInit {

  teaProducts: TeaProductsType[] = []

  constructor(private getProductService: GetProductsService) {
  }

  ngOnInit() {
    this.getProductService.getProducts()
      .subscribe(
        {
          next: (data) => {
            this.teaProducts = data;
          },
          error: (error) => {
            console.log(error.message)
          }
        }
      )
  }


}
