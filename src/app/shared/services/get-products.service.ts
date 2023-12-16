import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TeaProductsType} from "../../../types/teaProducts.type";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {


  constructor(private http: HttpClient) {
  }
 getProducts():Observable<TeaProductsType[]>{
    return this.http.get<TeaProductsType[]>('https://testologia.site/tea');
 }
 getProduct(id:number):Observable<TeaProductsType>{
    console.log(id)
  return this.http.get<TeaProductsType>(`https://testologia.site/tea?id=${id}`)
}


}
