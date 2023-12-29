import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from '../../models/productResponseModel';
import { response } from 'express';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {


constructor (private httpClient:HttpClient){}
 
  products:Product[] = 
  [

  ];
  apiUrl='https://localhost:7231/api/Products/getall';
 
  ngOnInit():void{
    this.getProducts();
  }

  getProducts(){
    console.log("init çalıştı")
    this.httpClient.get<ProductResponseModel>(this.apiUrl)
    .subscribe((response)=>{
      this.products=response.data

    });
  }
}
