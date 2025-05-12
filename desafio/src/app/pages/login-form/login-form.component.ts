import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginService = inject(LoginService)
  router = inject(Router)

  loginForm = new FormGroup({
    nome: new FormControl("", [Validators.required]),
    senha: new FormControl("", [Validators.required])
  })

  onLogin() {
    const {nome, senha} = this.loginForm.value
    if (!this.loginForm.valid || !nome || !senha) {
      alert("Preencha todos os campos")
      return
    }

    this.loginService.login(nome, senha).subscribe({
      error: (err) => {
          if (err.status === 401) {
            alert("Usuário ou senha incorretos")
            return
          }
            alert("Erro interno. Tente novamente mais tarde.")
      },

      next: () => {
        this.router.navigate(["/home"])
      }
    })
  }
}
