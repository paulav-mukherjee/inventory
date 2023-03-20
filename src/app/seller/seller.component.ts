import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login, Product, Signup } from '../dataType';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {

  public login : boolean = true
  public showErrorMsg : boolean = false

  switchForm() {
this.login = !this.login
  }
  hideErrorMsg(){
    this.showErrorMsg= false

  }
  
  constructor(private sellerService : SellerService , private route : Router) { }


  fromLogin (data : Signup){
console.log(data)
this.sellerService.postSellerData(data)

  }

  loginUser(data : Login){
console.log(data)
this.sellerService.postSellerLoginData(data)
this.sellerService.isSellerError.subscribe((res)=>{
this.showErrorMsg=res;  
})
}


  ngOnInit() : void{
    console.log(`onInit running...`)
    if (localStorage.getItem('seller')){
      this.sellerService.reloadSeller()
    }
  }
  
}
