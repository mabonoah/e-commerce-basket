import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addProductToBasket, removeProductFromBasket } from 'src/app/store/basket-actions';
import { selectProducts, selectTotalPrice } from 'src/app/store/basket-selectors';
import { NewProduct, Product, RemovableProduct } from 'src/app/types/product.type';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  products$: Observable<Product[]>;
  totalPrice$: Observable<number>;

  constructor(private store: Store) {
    this.products$ = this.store.select(selectProducts);
    this.totalPrice$ = this.store.select(selectTotalPrice);
  }

  ngOnInit(): void {
  }

  addProduct(product: { id: string, name: string, price: number }) {
    const newProduct: NewProduct = {
      payload: product
    }
    this.store.dispatch(addProductToBasket(newProduct));
  }

  removeProduct(id: string) {
    const removableProduct: RemovableProduct = {
      payload: {
        productId: id
      }
    }
    this.store.dispatch(removeProductFromBasket(removableProduct));
  }

}
