import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { routes } from 'src/app/constants/routes';

@Component({
  selector: 'app-fees-pay-invoice',
  templateUrl: './fees-pay-invoice.component.html',
  styleUrls: ['./fees-pay-invoice.component.scss']
})
export class FeesPayInvoiceComponent {
  
  public routes: typeof routes = routes;
  isSubMenuOpen: boolean;
  currentUrl: string;
constructor(private router: Router){
  router.events.subscribe(evt => {
    if(evt instanceof NavigationEnd) {
      this.currentUrl = evt.url;
    }
  });

}
}
