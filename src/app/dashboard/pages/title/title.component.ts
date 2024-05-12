import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-title',
  imports: [CommonModule],
  template: `<h1 class="text-3xl mb-5">{{ title }}</h1>`,
})
export class TitleComponent {
  @Input({ required: true }) title: string = '';
  @Input({ transform: booleanAttribute }) withShadow: boolean = false;
}