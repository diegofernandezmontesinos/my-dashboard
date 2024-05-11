import { Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'F';
@Component({
  standalone: true,
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
