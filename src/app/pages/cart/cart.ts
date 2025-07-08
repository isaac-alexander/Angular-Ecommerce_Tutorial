import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from "./cart-item/cart-item";
import { OrderSummary } from "./order-summary/order-summary";

@Component({
  selector: 'app-cart',
  imports: [CartItem, OrderSummary],
  template: `
    <div class="p-6 flex flex-col gap-4">
      <h2 class="text-2xl">Shopping Cart</h2>
      @for (item of cartService.cart(); track item.id) {
        <app-cart-item [item] ="item" />
      }
      <app-order-summary />
    </div>
  `,
  styles: ``
})
export class Cart {

  cartService = inject(CartService);

}
