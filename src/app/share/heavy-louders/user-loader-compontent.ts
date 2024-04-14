import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1>Hola Mundo User</h1>`
})
export class UserLoaderComponent {

  constructor() { }

  ngOnInit() {
  }

}
