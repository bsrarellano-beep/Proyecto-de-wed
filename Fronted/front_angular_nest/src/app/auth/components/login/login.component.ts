import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LayoutService } from '../../../admin/layout/service/app.layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public layoutService = inject(LayoutService);
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  funIngresar() {
    if (this.loginForm.valid) {
      this.authService.loginConNest(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/admin']);
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  }
}