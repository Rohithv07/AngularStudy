import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // unique
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'] - cannot include both styleUrls and styles together
  styles: [`
  	h3 {
  		color: dodgerblue;
  	}
  `]
})
export class AppComponent {
  title = 'rohith-first-app';
}
