import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-control-flow',
  templateUrl: './control-flow.component.html',
  styleUrls: ['./control-flow.component.css'],
})
export default class ControlFlowComponent {
  public showContent = signal(false);

  public toggleContent() {
    this.showContent.update(value => !value);
  }
}
