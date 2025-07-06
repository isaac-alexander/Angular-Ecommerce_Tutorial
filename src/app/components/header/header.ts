import { Component, inject, signal } from '@angular/core';
import { PrimaryButton } from "../primary-button/primary-button";
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton, RouterLink],
  template: `
  <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
    <button class="text-xl cursor-pointer" routerLink="/">My Store </button>
    <app-primary-button [label]="'Cart (' + cartService.cart().length + ')'" routerLink="/cart" />
  </div>
  `,
  styles: `
  
  `
})
export class Header {

  cartService = inject(CartService)

}
