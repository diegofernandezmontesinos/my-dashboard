import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heavy-louders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1>Hola Mundo</h1>`
})
export class HeavyLoudersSlowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
