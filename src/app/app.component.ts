import { Component } from '@angular/core';

// This is a decorator that marks a class as an Angular component and provides metadata about the component.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appointments-app';
}
