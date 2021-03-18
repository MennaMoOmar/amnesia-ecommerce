import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductsService } from 'src/app/services/products.service';
import { LoginComponent } from '../login/login.component';
import{UsersService} from '../../services/users.service'
import { Router } from '@angular/router';
// import { ProductService } from './../../services/product.service';
// import { Input } from '@material-ui/core';

@Component({
  providers:[LoginComponent],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(
    public _authService: AuthService,
    private product: ProductsService,
    public _userService: UsersService,
    // public productService: ProductService,
    private router:Router
  ) {}

  /*var*/
  isOpen: boolean = false;
  heartCount: number = 0;
  cartCount:number=0;
  count = JSON.parse(localStorage.getItem('cart')).length;
  @Input()  count2: string;
  subscriber:any
  user:any={
    firstname:"",
    lastname:"",
    profileImage:""
  }
  profImage:string

  // searchigValue: string = "";
  // allData: any[] = [];
  // obj: any[] = [];
  // products: any=[]

  /*toggle nav*/
  togglNavbar() {
    this.isOpen = !this.isOpen;
  }
  /*search*/
  // searchForName() {
  //   this.obj = this.products?.filter((product) => {
  //     return product.name.includes(this.searchigValue);
  //   })
  //   console.log(this.obj)
  // }
  /*get all product*/
  // getAllProducts() {
  //   if(this.products?.length == 0){
  //     this.productService.getProducts().subscribe(
  //       (products:any) => {
  //         this.products = products.products;
  //         this.searchForName();
  //       },
  //       err => console.log(err)
  //       )
  //     } else{
  //     this.searchForName();

  //   }
  // }
  search() {
    document.getElementById("search").classList.toggle("toggle");
  }
  /**display*/
  // display(event) {
  //   document.getElementById("search").classList.toggle("toggle");
  //   let search = document.getElementById("search-product");
  //   search.classList.toggle('hide');

  // }
  /*active*/
  active(e) {
    console.log(e.target);
    let links = document.getElementsByClassName('nav-link');
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }
    e.target.classList.add('active')
  }

  /*getget*/
  getData(){
    this.subscriber = this._userService.getProfile().subscribe(
      user =>{
        this.user = Object.values(user)[0]
        console.log(user)
        console.log(this.user.profileImage)
        this.profImage = `https://amnesia-skincare.herokuapp.com/api/images/show/${this.user.profileImage}` || "http://nwsid.net/wp-content/uploads/2015/05/dummy-profile-pic.png"
        return this.user
        
      },
      err=>console.log(err)
    )
  }
  /*oninit*/
  ngOnInit(): void {
    this.getData();
    /* addToHeart */
    this.product.addToHeart.subscribe(
      () => {
        this.heartCount = this.heartCount + 1;
      }
    )
    /* addToCart */
    // void
    //   this.product.addToCart.subscribe(
    //     () => {
    //       this.cartCount = this.cartCount + 1;
    //     }
    //   )
  }
}