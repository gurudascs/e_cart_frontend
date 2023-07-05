import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  allwishlistItem:any = []

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getWishlist().subscribe((result:any)=>{
      console.log(result);   //array(3)
      this.allwishlistItem = result
      
    },
    (result:any)=>{
      console.log(result.error);
      
    })

  }

  //delete API call
  deleteWishlist(id:any){
    this.api.deleteWishlist(id).subscribe((result:any)=>{
      this.allwishlistItem = result
      // alert("Product deleted successfully")
    },
    (result:any)=>{
      alert(result.error)
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
      this.deleteWishlist(product.id)
      alert(result)   //add quantity to cart
    },
    (result:any)=>{
      alert(result.error)   //error message
    }) 
  }

}
