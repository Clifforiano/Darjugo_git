import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../../models/item-cart.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cart.asObservable();


  addToCart(item: CartItem): void {
    const current = this.cart.value;
    const existing = current.find(i => i.productId === item.productId);

    if (existing) {
      existing.quantity += item.quantity;
    } else {
      current.push(item);
    }

    this.cart.next([...current]);
  }


  removeFromCart(productId: string): void {
    const filtered = this.cart.value.filter(i => i.productId !== productId);
    this.cart.next(filtered);
  }


  clearCart(): void {
    this.cart.next([]);
  }
}