import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

import { LoginComponent } from '../login/login.component';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isOpen:boolean=false;
  constructor(public _authService:AuthService){

  }
  // openLoginForm(){
  //   const modalRef = this.modalService.open(LoginComponent); 
  //  }
  
  togglNavbar(){
    this.isOpen = ! this.isOpen;
  }
  ngOnInit(): void {

}
}