import { Component } from '@angular/core';
import { routes } from 'src/app/constants/routes';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public routes: typeof routes = routes;
  isSubMenuOpen: boolean;
  currentUrl: string;

  constructor(private router: Router)
  {
    router.events.subscribe(evt => {
      if(evt instanceof NavigationEnd) {
        this.currentUrl = evt.url;
      }
    });
  }
}
