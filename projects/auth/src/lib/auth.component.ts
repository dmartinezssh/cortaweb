import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Form, FormControl } from '@angular/forms';

interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'dxn-auth',
  template: `
    <p>
      auth works!
    </p>
    <a routerLink="/auth/register">Register</a>
  `,
  styles: [
  ]
})
export class AuthComponent implements OnInit {
  form: FormGroup = new FormGroup({})
  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.form = new FormGroup<LoginForm>({
      email: new FormControl('', { nonNullable: true }),
      password: new FormControl('', {nonNullable: true})
    })
  }

}
