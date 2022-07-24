import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
