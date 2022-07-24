import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'dxn-login',
  template: `
    <h1>Login</h1>
    <form [formGroup]="form" (ngSubmit)="login()">
      <input type="text" formControlName="email">
      <input type="password" formControlName="password">
      <button>Iniciar Sessión</button>
    </form>
  `,
  styles: [`
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem 0;

    }
  `]
})

export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private build: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  login() {
    console.log(this.form.value);
    console.log(this.form.invalid);
  }
}
