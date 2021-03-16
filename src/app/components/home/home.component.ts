import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 

  }

  // title = 'owlcarouselinAngular';  
  // Images = ['assets/FA0A8855.JPG', 'assets/FA0A8855.JPG', 'assets/FA0A8855.JPG',' assets/FA0A8855.JPG'];  
  
  // SlideOptions = { items: 1, dots: true, nav: true };  
  // CarouselOptions = { items: 4, dots: true, nav: true };  
 
  shopnow(){}
  ngOnInit(): void {
    
  }
  onscroll
  myScroll:any = document.getElementById("scrollUp");
 
  

  topFunction(){
  if(this.myScroll == 0){
    document.documentElement.scrollTop = 0;
     this.myScroll.style.display ="none";
  }
    
  }
  
}
