import {Component, Input} from '@angular/core';
import {TeaProductsType} from "../../../../types/teaProducts.type";

@Component({
  selector: 'appTeaItem',
  templateUrl: './tea-item.component.html',
  styleUrls: ['./tea-item.component.scss']
})
export class TeaItemComponent {

  @Input()item: TeaProductsType;
  constructor() {
    this.item = {
      description: '',
      id: 0,
      image: '',
      price: 0,
      title:''
    }
  }

}
