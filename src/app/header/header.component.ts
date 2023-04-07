import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../dataType';
import { HomeComponent } from '../home/home.component';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

public sellerLogged : string = 'default'
public sellerName : string =''
public searchedItems : Product[] | undefined

constructor(private route : Router , private productService : ProductService){}


ngOnInit(){

  this.route.events.subscribe((val : any)=>{
    if (val.url){
      if(localStorage.getItem('seller') && val.url.includes('seller')){
        console.log(`seller`);
        this.sellerLogged = "seller"
        if(localStorage.getItem('seller')){
        let sellerStore = localStorage.getItem('seller');
        let sellerData = sellerStore && JSON.parse(sellerStore)[0]
        this.sellerName = sellerData.userName
        }
      } else{
        console.warn('no seller');
        this.sellerLogged = "default"
      }
    }
  })
}
logoutSeller (){
  localStorage.removeItem('seller');
  this.route.navigate(['/'])
  this.sellerName = ''
}

findProduct(quarry: KeyboardEvent){
 if (quarry){
  const element = quarry.target as HTMLInputElement
  // console.log(element.value);
  this.productService.searchProduct(element.value).subscribe((res)=>{
    console.warn(res);
    if (res.length > 5){
      res.length = 5
    }
    this.searchedItems = res
  })
 }
}
removeSearch(){
  this.searchedItems = undefined
}
searchValue(searchName: HTMLInputElement){
this.route.navigate([`search/${searchName.value}`])

}
}
