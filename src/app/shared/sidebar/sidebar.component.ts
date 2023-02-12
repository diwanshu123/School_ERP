import { Component } from '@angular/core';
import { routes } from 'src/app/constants/routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public routes: typeof routes = routes;
  isSubMenuOpen: boolean;

}
