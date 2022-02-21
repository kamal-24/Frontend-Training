import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-1';
  numbers=[1,2,3,4,5]
  show="one"
  color="red"
  today= Date.now();
}
