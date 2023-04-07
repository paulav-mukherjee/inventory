import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Login, Signup } from '../dataType';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerSignUp = new BehaviorSubject<boolean>(false)
  public isSellerError = new EventEmitter <boolean>(false)
  url = 'https://inventory-management-2023-default-rtdb.firebaseio.com/seller.json'

  constructor(private http : HttpClient , private route : Router) { }

  postSellerData (data : Signup){
    this.http.post(this.url,data , {observe: 'response'}).subscribe((res)=>{
      console.log(res.body)
      if(res)
      this.isSellerSignUp.next(true)
      localStorage.setItem("seller" , JSON.stringify(res.body))
      this.route.navigate(['seller-home'])
    })
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerSignUp.next(true)
      this.route.navigate(['seller-home'])
    }
  }

//seller login

postSellerLoginData(data : Login){
console.log("user Data")
this.http.get(`${this.url}?email=${data.email}&password=${data.password}`, {observe:'response'}).subscribe((res:any)=>{
  console.log(res.body)
  if(res && res.body && res.body.length){
   console.log(`user logged in`);
      localStorage.setItem("seller" , JSON.stringify(res.body))
      this.route.navigate(['seller-home'])
   
  }else {
    console.warn(`login failed!`);
    this.isSellerError.emit(true)
  }
})
}


}
