import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md">
      {{title()}}
    </div>
  `,
  styles: ``
})
export class HeaderComponent {

  //title: string = "Jacked Supplements App"
  title = signal("Jacked Supplements App");

}
