import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  templateUrl: './change-detection.component.html',
  imports: [CommonModule],
  styleUrls: ['./change-detection.component.css'],
})
export default class ChangeDetectionComponent {
  constructor() {}

  ngOnInit() {}
}
