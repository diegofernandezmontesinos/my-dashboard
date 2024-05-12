import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '../title/title.component';

type Grade = 'A' | 'B' | 'F';
@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  selector: 'app-control-flow',
  templateUrl: './control-flow.component.html',
  styleUrls: ['./control-flow.component.css'],
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');

  public frameworks = signal(['Angular', 'Vue', 'React']);

  public frameworks2 = signal([]);

  public toggleContent() {
    this.showContent.update((value) => !value);
  }
}
