import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/dataType';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  public productList: Product | undefined

  constructor(private route: ActivatedRoute, private productService: ProductService , private router : Router) { }


  updateProduct(data: Product) {
    // console.log(data);
    if (this.productList) {
      data.id = this.productList.id
    }
    this.productService.updateProduct(data).subscribe((res) => {
      // console.log(res);
      alert(`${this.productList?.name} has been updated in the main database`)
      this.router.navigate(['seller-home'])

    })
  }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id')
    // console.warn(productId);
    productId && this.productService.getProduct(productId).subscribe((res) => {
      // console.log(res);
      this.productList = res
      // console.warn(this.productList);
    })
  }

}
