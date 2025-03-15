import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  todayDate: string = new Date().toDateString();
  scheduledAppointments = { total: 84, completed: 24, pending: 60 };

  summaryData = [
    { title: 'Loan Due', value: '45/45', icon: 'cash-outline', color: '#FF6B6B' },
    { title: 'Loan Notice', value: '25/25', icon: 'document-text-outline', color: '#FFA94D' },
    { title: 'Chit Due', value: '14/14', icon: 'wallet-outline', color: '#4DABF7' }
  ];

  schedule = [
    { name: 'Kamalesh S', amount: '₹1,50,000', loanNo: 'TIP-548/22' },
    { name: 'Rajesh S', amount: '₹50,000', loanNo: 'CH001/22/P24' },
    { name: 'Suresh K', amount: '₹2,50,000', loanNo: 'MIP-242/22' }
  ];
}
