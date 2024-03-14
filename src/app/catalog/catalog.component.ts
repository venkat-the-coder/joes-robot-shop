import { Component, inject } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/service/cart.service';
import { ProductService } from './service/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: any;
  filter: string = '';

  constructor(private cartSvc: CartService, private _productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this._productService.getProducts().subscribe((data: IProduct[]) => {
      this.products = data;
    });
    this.activatedRoute.queryParams.subscribe((data: Params) => {
      this.filter = data['filter'] ?? '';
    })
  }

  addToCart(product: IProduct) {
    this.cartSvc.add(product);
    this.router.navigate(['/cart']);
  }

  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter(
        (product: any) => product.category === this.filter
      );
  }
}
