import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import ShareSidemenuComponent from '@share/share-sidemenu/share-sidemenu.component';

@Component({
  standalone: true,
  imports: [RouterModule, ShareSidemenuComponent],
  templateUrl: './dashboard.component.html',
})
export default class DashboardComponent {}
