import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../SERVICE/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any[]=[];
  constructor(private api:ApiService) {
    // this.items=[];
   }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.api.getJson().subscribe(resp=>{
      // console.log('resp',resp)
      this.items =resp;
    })
  }
  addToCart()
  {
      console.log('added to cart');
  }
}
