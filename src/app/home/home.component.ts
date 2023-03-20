import { Component, OnInit } from '@angular/core';
import { Product } from '../dataType';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

public popularProducts : undefined | Product[]
public trendyProducts : undefined | Product[]
  constructor(private productService : ProductService){}

  ngOnInit() : void{
    this.productService.popularProduct().subscribe((res)=>{
      console.log(res);
      this.popularProducts = res
    })
    this.productService.trendyProduct().subscribe((res)=>{
      this.trendyProducts = res
    })
  }
}
