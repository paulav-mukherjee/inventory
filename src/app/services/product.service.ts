import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../dataType';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  productAdding(data: any) {
    return this.http.post('http://localhost:3000/products', data)
  }
  productListing() {
    return this.http.get<Product[]>('http://localhost:3000/products')
  }
  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }
  getProduct (id : string) {
return this.http.get<Product>(`http://localhost:3000/products/${id}`)
  }
  updateProduct(product : Product){
  return this.http.put<Product>(`http://localhost:3000/products/${product.id}`, product) 
  }
  popularProduct(){
    return this.http.get<Product[]>('http://localhost:3000/products?_limit=3')
  }
  trendyProduct(){
    return this.http.get<Product[]>('http://localhost:3000/products?_limit=8')
  }
  searchProduct(quarry : string){
    return this.http.get<Product[]>(`http://localhost:3000/products?q=${quarry}`)
  }
}
