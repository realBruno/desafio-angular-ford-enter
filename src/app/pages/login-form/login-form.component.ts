import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {
  loginService = inject(LoginService);
  router = inject(Router);

  loginForm = new FormGroup({
    nome: new FormControl("", [Validators.required]),
    senha: new FormControl("", [Validators.required]),
    autologin: new FormControl(false)
  });

  loginButtonColor = 'rgb(173, 181, 189)';
  passwordVisible = false;

  ngOnInit() {
    const auto = localStorage.getItem('autologin');
    const nome = localStorage.getItem('usuario');
    const senha = localStorage.getItem('senha');

    if (auto === 'true' && nome && senha) {
      this.loginService.login(nome, senha).subscribe({
        next: () => this.router.navigate(['/home']),
        error: () => localStorage.clear()
      });
    }
  }

  onLogin() {
    const nome = (this.loginForm.get('nome')?.value || '').trim();
    const senha = (this.loginForm.get('senha')?.value || '').trim();
    const autologin = this.loginForm.get('autologin')?.value;

    if (!nome || !senha) {
      alert("Preencha todos os campos");
      return;
    }

    this.loginService.login(nome, senha).subscribe({
      next: () => {
        if (autologin) {
          localStorage.setItem('autologin', 'true');
          localStorage.setItem('usuario', nome);
          localStorage.setItem('senha', senha);
        } else {
          localStorage.clear();
        }

        this.router.navigate(["/home"]);
      },
      error: (err) => {
        if (err.status === 401) {
          alert("Usuário ou senha incorretos");
        } else {
          alert("Erro interno. Tente novamente mais tarde.");
        }
      }
    });
  }

  onInputChange() {
    const nome = (this.loginForm.get('nome')?.value || '').trim();
    const senha = (this.loginForm.get('senha')?.value || '').trim();

    this.loginButtonColor = (nome && senha)
      ? 'rgb(0, 160, 255)'
      : 'rgb(173, 181, 189)';
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
