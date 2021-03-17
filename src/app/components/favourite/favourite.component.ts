import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private productsService: ProductsService,
    private myActivatedRoute: ActivatedRoute,
    private router: Router
    ) { }
  /*var*/
  subscriber
  user
  productImgoArr=[]
  
  /*get profile info*/
  getProfileFavourite() {
    this.subscriber = this.userService.getProfile()
      .subscribe((user) => {
        this.user = Object.values(user)[0].favoriteProducts;
        if(this.user.length==0){
          this.router.navigate(['/favouriteEmpty']);
        }
      },
        (error) => {
          console.log(error);
        }
      )
  }
  /*delete product from cart*/
  deleteProduct(index, id) {
    console.log(id)
    this.subscriber = this.productsService.deleteProductFromFavourite(id)
    .subscribe((product) => {
      console.log(product);
      document.getElementsByTagName("tr")[parseInt(index) + 1].style.display = "none";
    },
      (error) => {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
    this.getProfileFavourite()
  }

}