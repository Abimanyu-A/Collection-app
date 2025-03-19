// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { person, home, chevronForward, arrowForward, notifications, calendar, documentText, cash, handLeft } from 'ionicons/icons';



addIcons({
  person: person,
  home: home,
  chevronForward: chevronForward,
  arrowForward: arrowForward,
  notifications: notifications,
  calendar: calendar,
  documentText: documentText,
  cash: cash,
  hand: handLeft,
});

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]
})
export class DashboardComponent implements OnInit {
  userName: string = 'Dhruv';
  currentDate: string = '02 Jan, 2024';
  location: string = 'Sayalkudi - Nerkudi';
  
  // Dashboard stats
  totalAppointments: number = 84;
  completedAppointments: number = 24;
  remainingAppointments: number = 60;
  
  // Loan and Chit metrics
  loanDue: { current: number, total: number } = { current: 45, total: 45 };
  loanNotice: { current: number, total: number } = { current: 25, total: 25 };
  chitDue: { current: number, total: number } = { current: 14, total: 14 };
  
  // Journey status
  journeyStarted: boolean = true;
  
  // Today's schedule
  todaySchedule = [
    {
      name: 'Kamalesh S',
      type: 'Loan',
      amount: '1,50,000',
      number: 'TIP-548/22',
      viewDetails: () => console.log('View details for Kamalesh')
    },
    {
      name: 'Rajesh S',
      type: 'Chit',
      amount: '50,000',
      number: 'CHIT/122/P24',
      viewDetails: () => console.log('View details for Rajesh')
    },
    {
      name: 'Suresh K',
      type: 'Loan',
      amount: '2,50,000',
      number: 'MIP-242/22',
      viewDetails: () => console.log('View details for Suresh')
    }
  ];

  constructor() { }

  ngOnInit() { }
  
  startJourney() {
    console.log('Journey started');
    this.journeyStarted = true;
  }
  
  endJourney() {
    console.log('Journey ended');
    this.journeyStarted = false;
  }
  
  processEOD() {
    console.log('EOD Process initiated');
  }
}