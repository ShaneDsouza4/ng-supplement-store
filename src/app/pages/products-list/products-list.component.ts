import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `

    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of products(); track product.id) {
        <app-product-card  [product]="product" />
      }
    </div>  
  `,
  styles: ``
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      title: "ON GOLD STANDARD",
      price: 109.99,
      image: "https://jackednutrition.pk/cdn/shop/files/httpsadmin.shopify.comstorejackednutrition-pkproducts7021813203044_1.png?v=1718463798&width=720",
      stock: 10
    },
    {
      id: 2,
      title: "ISO 100",
      price: 120.99,
      image: "https://jackednutrition.pk/cdn/shop/files/dymatizeiso100.jpg?v=1690433013&width=720",
      stock: 5
    },
    {
      id: 3,
      title: "NUTREX ISOFIT",
      price: 89.55,
      image: "https://jackednutrition.pk/cdn/shop/products/isofit.jpg?v=1668426374&width=720",
      stock: 0
    },
    {
      id: 4,
      title: "BPI SPORTS WHEY HD",
      price: 89.55,
      image: "https://jackednutrition.pk/cdn/shop/files/1_e59fbe62-7e5a-4a5c-9425-8660b9c9b23c.png?v=1720602858&width=720",
      stock: 2
    },
  ])
}
