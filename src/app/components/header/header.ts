import { Component, signal } from '@angular/core';
import { PrimaryButton } from "../primary-button/primary-button";

@Component({
  selector: 'app-header',
  imports: [PrimaryButton],
  template: `
  <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
    <span class="text-xl">My Store </span>
    <app-primary-button label="Cart" (btnClicked)="showButtonClicked()"/>
  </div>
  `,
  styles: `
  
  `
})
export class Header {
  showButtonClicked() {
    console.log('clicked');
    
  }
}
