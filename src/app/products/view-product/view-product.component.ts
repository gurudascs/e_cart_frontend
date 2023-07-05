import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productId: string=""

  constructor(private viewRoute:ActivatedRoute, private api:ApiService){}

  //to hold particular product details
  product:any=[]

  ngOnInit(): void {

    //to fetch parameter details
    this.viewRoute.params.subscribe((result:any)=>{
      console.log(result);             //productId:"3"
      console.log(result.productId);   //3
      this.productId = result.productId;

      //to fetch particular product details
      this.api.viewProduct(this.productId).subscribe((result:any)=>{
        console.log(result);
        this.product = result   //product details
        
      },
      (result:any)=>{
        console.log(result.error);   //error message
        
      })
    })
  }

  //API function to add product to wishlist
  addToWishlist(){
    //destructuring
    const {id, title, price, image} = this.product

    //API function
    this.api.addToWishlist(id, title, price, image).subscribe((result:any)=>{
      alert(result);
    },
    (result:any)=>{
      alert(result.error);    //error message
    })
  }

  addToCart(product:any){
    //add quantity to cart
    Object.assign(product, {quantity:1})
    console.log(product);

    //API call to add quantity
    this.api.addToCart(product).subscribe((result:any)=>{
      //call cart count
      this.api.cartCount()
      alert(result)   //add quantity to cart
    },
    (result:any)=>{
      alert(result.error)   //error message
    }) 
  }

}
