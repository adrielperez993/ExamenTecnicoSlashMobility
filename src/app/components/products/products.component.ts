import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsList: Array<Product> = [
    new Product(1, "Nutella", 10, "assets/Nutella.jpg"),
    new Product(2, "Nutella", 10, "assets/Nutella.jpg"),
    new Product(3, "Nutella", 10, "assets/Nutella.jpg"),
    new Product(4, "Nutella", 10, "assets/Nutella.jpg"),
    new Product(5, "Nutella", 10, "assets/Nutella.jpg"),
    new Product(6, "Nutella", 10, "assets/Nutella.jpg"),
    new Product(7, "Nutella", 10, "assets/Nutella.jpg"),
    new Product(8, "Nutella", 10, "assets/Nutella.jpg"),
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
