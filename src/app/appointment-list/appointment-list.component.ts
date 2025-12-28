import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();

  appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  ngOnInit(): void {
    const appointments = localStorage.getItem('appointments');
    this.appointments = appointments ? JSON.parse(appointments) : [];
  }

  addAppointment(): void {
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      const newAppointment: Appointment = {
        id: crypto.randomUUID(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment);

      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

      localStorage.setItem("appointments", JSON.stringify(this.appointments));
    }
  }

  deleteAppointment(id: string): void {
    console.log(id);
    console.log(typeof(id));
    if(this.appointments.length >= 0) {
      this.appointments = this.appointments.filter(appointment => {
        return appointment.id !== id;
      })
    }

    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }

  test() {
    console.log(this.appointments);
  }
}
