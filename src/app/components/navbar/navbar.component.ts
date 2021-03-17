import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public _authService: AuthService) { }

  /*var*/
  isOpen: boolean = false;

  /*toggle nav*/
  togglNavbar() {
    this.isOpen = !this.isOpen;
  }
  /*search*/
  search(){
    document.getElementById("search").classList.toggle("toggle");
  }
  /*active*/
  active(e){
    console.log(e.target);
    let links= document.getElementsByClassName('nav-link');
    for(let i=0;i<links.length;i++){
      links[i].classList.remove('active');
    }
    e.target.classList.add('active')
  }
  ngOnInit(): void {
  }
}