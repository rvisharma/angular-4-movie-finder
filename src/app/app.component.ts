import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Nav bar here</h1>
  <section><app-movie></app-movie></section>
  `,
  styles: [`
    body:{
      background-color:red;
    }
  `]
})
export class AppComponent {
}
