import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/dataType';
import { ProductService } from 'src/app/services/product.service';
import {faTrash , faFilePen} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  public productList : any
  deletIcon = faTrash
  updateIcon = faFilePen

  constructor(private productService : ProductService){}

ngOnInit(): void {
  this.listedProducts()
}

removeItem (id:number){
  console.log(id)
this.productService.deleteProduct(id).subscribe((res)=>{
  console.log(res)
  alert(`Product deleted.`)
  this.listedProducts()
})
}

updateItem(id : number){
console.log(id);


}


listedProducts(){
  this.productService.productListing().subscribe((res)=>{
    console.log(res)
    this.productList=res
  })
}


}
