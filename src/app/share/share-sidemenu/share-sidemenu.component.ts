import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-share-sidemenu',
  templateUrl: './share-sidemenu.component.html',
  styleUrls: ['./share-sidemenu.component.css'],
})
export default class ShareSidemenuComponent {
  public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'));

  constructor() {
    // const dashboardRouter = routes
    //   .map((route) => route.children ?? [])
    //   .flat()
    //   .filter((route) => route && route.path)
    //   .filter((route) => !route.path?.includes(':'));
  }
}
