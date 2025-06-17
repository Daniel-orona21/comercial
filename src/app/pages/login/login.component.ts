import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  errorMessage: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  loginObj = {
    email: '',
    password: ''
  }

  entrar() {
    if (this.authService.login(this.loginObj.email, this.loginObj.password)) {
      this.router.navigate(['/app']);
    } else {
      this.errorMessage = 'Credenciales inválidas. Use admin o director como email y 123456 como contraseña.';
    }
  }
}
