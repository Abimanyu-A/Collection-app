import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async login() {
    if (this.loginForm.invalid) {
      const toast = await this.toastCtrl.create({
        message: 'Please enter valid credentials',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
      return;
    }

    const { username, password } = this.loginForm.value;

    // Dummy credentials for testing
    const validUser = { username: 'admin', password: 'admin123' };

    if (username === validUser.username && password === validUser.password) {
      localStorage.setItem('user', JSON.stringify({ username }));

      const toast = await this.toastCtrl.create({
        message: 'Login successful!',
        duration: 2000,
        color: 'success'
      });
      await toast.present();

      console.log('User logged in:', username);

      // Redirect to dashboard
      this.router.navigate(['/dashboard']);
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Login Failed',
        message: 'Invalid username or password!',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
