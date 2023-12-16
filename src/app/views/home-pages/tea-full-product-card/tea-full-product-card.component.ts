import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TeaProductsType} from "../../../../types/teaProducts.type";
import {GetProductsService} from "../../../shared/services/get-products.service";
import {AddToCartService} from "../../../shared/services/add-to-cart.service";



@Component({
  selector: 'TeaFullProductCard',
  templateUrl: './tea-full-product-card.component.html',
  styleUrls: ['./tea-full-product-card.component.scss']
})
export class TeaFullProductCardComponent implements OnInit {


  product: TeaProductsType;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private getProductService: GetProductsService,
              private addToCartService: AddToCartService) {
    this.product = {
      description: '',
      id: 0,
      image: ' ',
      price: 0,
      title: ''
    }
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params[`id`]) {
        this.getProductService.getProduct(+params[`id`])
          .subscribe(
            {
              next: (data) => {
                this.product = data
              },
              error: (error:ErrorEvent) => {
                console.log(error.message)
                this.router.navigate([`/`])
              }
            }
          )
      }
    })


  }

  addToCart(title: string): void {
    this.addToCartService.teaProduct = title;
    localStorage.setItem('product', title);
    this.router.navigate(['/order'])
  }
}
