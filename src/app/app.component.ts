import { Component } from '@angular/core';

// This is a decorator that marks a class as an Angular component and provides metadata about the component.
@Component({
  selector: 'app-root', // This is the custom HTML tag that represents this component. (should be inside templateUrl html file)
  templateUrl: './app.component.html', // Template is the HTML that defines the view for this component.
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appointments-app'; // This is just a property of the component class.
}
