import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heavy-louders-fast',
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
