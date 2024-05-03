import { Component, OnInit } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  standalone: true,
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
