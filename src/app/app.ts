import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { ProductsList } from "./pages/products-list/products-list";

@Component({
  selector: 'app-root',
  imports: [Header, ProductsList],
  template: `
    <app-header />

    <app-products-list />
  `,
  styles: [],
})
export class App {
  protected title = 'angular-ecommerce';
}
