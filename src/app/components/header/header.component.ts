import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
      <span class="text-xl"> {{title()}} </span>
      <app-primary-button [label]="cart()"  (btnClicked)="showButtonClicked()" />
    </div>
  `,
  styles: ``
})
export class HeaderComponent {

  //title: string = "Jacked Supplements App"
  title = signal("Jacked Supplements App");

  cart = signal("Cart");


  showButtonClicked() {
    console.log("Clicked")
  }

}
