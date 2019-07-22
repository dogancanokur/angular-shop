import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService) { }

  title = "Ürün Listesi";

  filterText = "";

  products: Product[] = [
    // products : Product[] =
    {
      id: 1,
      name: "Laptop",
      price: 2500,
      categoryId: 1,
      description: "HP Laptop",
      imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=693&q=80"
    },
    {
      id: 2,
      name: "Mouse",
      price: 25,
      categoryId: 2,
      description: "A4Tech",
      imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80"
    },
    {
      id: 3,
      name: "Gitar",
      price: 150,
      categoryId: 2,
      description: "Fender",
      imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80"
    },
    {
      id: 4,
      name: "Klavye",
      price: 25,
      categoryId: 2,
      description: "Asus",
      imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80"
    },
    {
      id: 5,
      name: "Telefon",
      price: 1000,
      categoryId: 2,
      description: "iPhone",
      imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80"
    }
  ]

  ngOnInit() {
  }

  addToCart(product) {
    this.alertifyService.success(product.name + " eklendi");
  }
}
