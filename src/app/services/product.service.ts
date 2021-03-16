import { Product } from './../../models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class ProductService{
   amnesiaURL= "https://amnesia-skincare.herokuapp.com/api/";
    //{{amnesiaURL}}/products/?limit=4&skip=1
    products:Product[]=[];
    constructor(private http:HttpClient) {}
    getAllProducts(){
      return this.products.slice(); //copy from products
    }

    getAllProductsApi(skip,take){
      console.log('sssss')
      return this.http.get(this.amnesiaURL + "products/?limit="+take +"&skip="+skip ); //copy from products
    }
}