import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBack, cloudUploadOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

addIcons({
  cloudUploadOutline,
  arrowBack
})

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss'],
  imports: [IonicModule]
})
export class JourneyComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/dashboard']);
  }

}
