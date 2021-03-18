import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { faStar, faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { count } from 'rxjs/operators';
// import * as EventEmitter from 'node:events';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Output() count = new EventEmitter();
  addToCartBtn = "Add To Cart"
  faStar = faStar;
  faCartPlus = faCartPlus;
  faHeart = faHeart;
  heartIcon = "#CDCDCD";
  @Input() objectOfInputs: {
    product_name: string,
    current_price: string,
    old_price: string,
    rating: string,
    image: string,
    status: string,
    _id: string;
    isFavorite: boolean;
  };

  ids:string[]=[];
  _id: string;
  image: string;
  star;
  current_price: string;
  old_price: string;
  product_name: string;
  status: string;
  classOfStatus: string;
  options = "options-disappear";
  fav = "fav-disappear";
  
  appear() {
    this.options = "options-appear";
    this.fav = "fav-appear";
  }
  disappear() {
    this.options = "options-disappear";
    this.fav = "fav-disappear";
  }

  /*chnge color*/
  changeHeartColor(id) {
    // we will pass the id to the back-end later
    if(!this.ids.includes(id)){
    this.myService.addToHeart.next();
    this.ids.push(id)
  }
    if (!this.objectOfInputs.isFavorite) {
      this.heartIcon = "#F65B5F";
      console.log("add to fav")
    }
  }

  /* add to cart */
  // cartId:string[]=[]
  cartProducts = localStorage.getItem('cart');
  addToCart(event) {
    this.count = JSON.parse(localStorage.getItem('cart')).length;
    // console.log(this.count)
    // this.myService.addToCart.next();
    // if(!this.cartId.includes(id)){
    //   this.myService.addToCart.next();
    //   this.cartId.push(id)
    // }
    let cart: any = JSON.parse(localStorage.getItem('cart')) || [];
    let found = cart.find(product => product.productId == this.objectOfInputs._id);
    console.log(found)
    if (!found) {
      cart.push({
        productId: this.objectOfInputs._id,
        name: this.objectOfInputs.product_name,
        quantity: 1,
        current_price: this.objectOfInputs.current_price,
        image: this.objectOfInputs.image
      })
      localStorage.setItem('cart', JSON.stringify(cart));
      this.addToCartBtn = "Added";
    }
  }


  constructor(
    private router: Router,
    private myService: ProductsService
  ) {}


  ngOnInit(): void {
    // localStorage.setItem('cart', JSON.stringify(this.cart))

    /* add to cart */
    console.log(this.objectOfInputs);
    let cart: any = JSON.parse(localStorage.getItem('cart')) || [];
    let found = cart.find(product => product.productId == this.objectOfInputs._id);
    if(found){
      this.addToCartBtn = "Added";
    }

    this.star = getRating(Number(this.objectOfInputs.rating));
    this.status = (this.objectOfInputs.status != "") ? "Sale" : "";
    this.classOfStatus = (this.objectOfInputs.status != "") ? "badge badge-danger py-3 p-2 rounded-circle" : "";
    this.old_price = this.objectOfInputs.old_price;
    this.product_name = this.objectOfInputs.product_name;
    this.image = this.objectOfInputs.image;
    this.current_price = this.objectOfInputs.current_price;
    this._id = this.objectOfInputs._id;
    this.heartIcon = (this.objectOfInputs.isFavorite) ? "#F65B5F" : "#CDCDCD";

  }

  gotoProdInfo() {
    console.log("jhj")
    this.router.navigate(['/productInfo/' + this._id])
  }
}

function getRating(rating: number) {
  let arr = ["grey", "grey", "grey", "grey", "grey"]
  for (let i = 0; i < rating; i++) {
    arr[i] = "#FFC622";
  }
  return arr
}
