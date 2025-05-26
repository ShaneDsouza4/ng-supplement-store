import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div class="header">
      {{title()}}
    </div>
  `,
  styles: ``
})
export class HeaderComponent {

  //title: string = "Jacked Supplements App"
  title = signal("Jacked Supplements App");

}
