import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

declare var $: any;


@Component({
  selector: 'MainComponent',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  private observable: Observable<boolean>;
  private subscribtion: Subscription | null = null;
  PopUpMainPage: boolean = false;

  //private popup
  constructor() {
    //  this.popup = document.getElementById('popupMainPage')
    this.observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next(true);
      }, 9000)
    });
  }

  ngOnInit() {
    $("#accordion").accordion();

    this.subscribtion = this.observable.subscribe((param: boolean) => {
      this.PopUpMainPage = param
      console.log(param)
    });
  }

  closePopup() {
    this.PopUpMainPage = false
    this.subscribtion?.unsubscribe()
  }

  ngOnDestroy() {
    this.PopUpMainPage = false
    this.subscribtion?.unsubscribe()
  }
}
