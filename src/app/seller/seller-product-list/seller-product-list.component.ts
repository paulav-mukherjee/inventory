import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/dataType';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-product-list',
  templateUrl: './seller-product-list.component.html',
  styleUrls: ['./seller-product-list.component.css']
})
export class SellerProductListComponent implements OnInit {

constructor(private produceService: ProductService , private route : Router){}

  addingProduct(data : Product){
console.log(data)
this.produceService.productAdding(data).subscribe((res)=>{
  console.log(res); 
  alert(`Product added sucessfully`)
  this.route.navigate(['seller-home'])
})
}


ngOnInit(): void {}

}
