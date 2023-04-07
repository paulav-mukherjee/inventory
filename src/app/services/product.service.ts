import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../dataType';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'https://inventory-management-2023-default-rtdb.firebaseio.com/products.json'

  constructor(private http: HttpClient) { }

  productAdding(data: any) {
    return this.http.post(this.url, data)
  }
  productListing() {
    return this.http.get<Product[]>(this.url)
  }
  deleteProduct(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }
  getProduct (id : string) {
return this.http.get<Product>(`${this.url}/${id}`)
  }
  updateProduct(product : Product){
  return this.http.put<Product>(`${this.url}/${product.id}`, product) 
  }
  popularProduct(){
    return this.http.get<Product[]>(`${this.url}`)
  }
  trendyProduct(){
    return this.http.get<Product[]>(`${this.url}`)
  }
  searchProduct(quarry : string){
    return this.http.get<Product[]>(`${this.url}?q=${quarry}`)
  }
}
