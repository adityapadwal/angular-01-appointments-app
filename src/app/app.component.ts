import { Component, Input } from '@angular/core';

// This is a decorator that marks a class as an Angular component and provides metadata about the component.
@Component({
  selector: 'app-root', // This is the custom HTML tag that represents this component. (should be inside templateUrl html file)
  templateUrl: './app.component.html', // Template is the HTML that defines the view for this component.
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // This is a property of the parent omponent
  parentProp: string = 'Property from Parent Component'; 

  // Property to told datat received from the child component
  receivedFromChildComponentProp: string = "";

  // Event handler function to handle event emitted from child component
  handleChildComponentEvent(modifiedPropFromChild: string) {
    this.receivedFromChildComponentProp = this.receivedFromChildComponentProp.concat(modifiedPropFromChild);
  }
}
