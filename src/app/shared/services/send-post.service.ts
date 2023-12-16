import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TeaDataType} from "../../../types/teaData.type";

@Injectable({
  providedIn: 'root'
})
export class SendPOSTService {

  constructor(private http: HttpClient) { }

  makeOrder(data:TeaDataType) {
    return this.http.post<{success: number, message?: string}>(`https://testologia.site/order-tea`, data)
  }
}
