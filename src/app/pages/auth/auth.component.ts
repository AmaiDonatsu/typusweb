import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isLogin = signal(true);

  toggleMode() {
    this.isLogin.set(!this.isLogin());
  }

  onGoogleLogin() {
    console.log('Iniciar sesión con Google');
    // Aquí irá la lógica de autenticación con Google
  }

  onSubmit() {
    if (this.isLogin()) {
      console.log('Iniciando sesión...');
      // Lógica de inicio de sesión
    } else {
      console.log('Registrando usuario...');
      // Lógica de registro
    }
  }
}