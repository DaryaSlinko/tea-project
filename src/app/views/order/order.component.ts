import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AddToCartService} from "../../shared/services/add-to-cart.service";
import {SendPOSTService} from "../../shared/services/send-post.service";
import {customValidateForAll} from "../../shared/directives/customValidator";


@Component({
  selector: 'OrderComponent',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  openSuccesPopUp: boolean = false;
  openErrorPopUp: boolean = false;

  makeOrderForm = this.fb.group({
    name: ['', [Validators.required, customValidateForAll(`^(\s*)?[A-Za-zА-Яа-я]+(\s*)?$`)]],
    last_name: ['', [Validators.required, customValidateForAll(`^(\s*)?[A-Za-zА-Яа-я]+(\s*)?$`)]],
    phone: ['', [Validators.required, customValidateForAll(`^[0-9]{1,12}$`)]],
    country: ['', [Validators.required, customValidateForAll(`^(\s*)?[A-Za-zА-Яа-я]+(\s*)?$`)]],
    zip: ['', [Validators.required, customValidateForAll(`^[0-9]{1,6}$`)]],
    product: ['', [Validators.required]],
    address: ['', [Validators.required, customValidateForAll(`^(?!\\s*$)[-\\/., 0-9а-яА-Я]+$`)]],
    comment: ['']
  })
  // makeOrderForm= new FormGroup({
  //   name: new FormControl(''),
  //   last_name: new FormControl(''),
  //   phone: new FormControl(''),
  //   country: new FormControl(''),
  //   zip: new FormControl(''),
  //   product: new FormControl(''),
  //   address: new FormControl(''),
  //   comment: new FormControl('')
  // })

  get name() {
    return this.makeOrderForm.get('name')
  }

  get last_name() {
    return this.makeOrderForm.get('last_name')
  }

  get phone() {
    return this.makeOrderForm.get('phone')
  }

  get country() {
    return this.makeOrderForm.get('country')
  }

  get address() {
    return this.makeOrderForm.get('address')
  }

  get zip() {
    return this.makeOrderForm.get('zip')
  }


  constructor(private addToCartService: AddToCartService,
              private sendPOST: SendPOSTService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.openSuccesPopUp = false
    this.openErrorPopUp = false
    if (this.addToCartService.teaProduct) {
      this.makeOrderForm.patchValue({
        product: this.addToCartService.teaProduct,
      })
    } else {
      this.makeOrderForm.patchValue({
        product: localStorage.getItem('product'),
      })
    }

  }

  makeOrder() {
    if (!this.makeOrderForm.invalid) {
      this.sendPOST.makeOrder(this.makeOrderForm.getRawValue()).subscribe(response => {
          if (response.success && !response.message) {
            this.openSuccesPopUp = true
          } else {
            this.openErrorPopUp = true
          }
        }
      )
      this.makeOrderForm.reset()
      localStorage.clear()
    } else {
      alert('Заполните все поля')
      return
    }
  }

  closeErrorPopup(){
    this.openErrorPopUp = false
  }
  closeSuccessPopup(){
    this.openSuccesPopUp = false
  }
}
