import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  /*ctor*/
  constructor(private myClient: HttpClient) {
    console.log(myClient);
    console.log("ctor")
  }

  /*local storage*/
  token = localStorage.getItem('cart')

  private baseURL: string = "https://amnesia-skincare.herokuapp.com/api"
  
    /*diplay product by id*/
    displayProductById(id) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.token
        })
      };
      return this.myClient.get(`${this.baseURL}/products/${id}`, httpOptions);
    }

    /*delete product from favourite*/
    deleteProductFromFavourite(id){
      console.log(id)
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.token
        })
      };
      return this.myClient.delete(`${this.baseURL}/products/favorites/${id}`, httpOptions);
    }

    /*count heart*/
    addToHeart=new Subject();
    
    /* addToCart */
    addToCart=new Subject();
}
