import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  childProp: string = "Property from Child Component";

  @Input()
  parentProp: string = "";
  
  @Output()
  save: any = new EventEmitter<string>();

  onSave() {
    this.save.emit(this.childProp);
  }

}
