import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from './sidenav-item/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './sidenav-item/order/order.component';
import { AccountDetailsComponent } from './sidenav-item/account-details/account-details.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DownloadsComponent } from './sidenav-item/downloads/downloads.component';
import { PaymentMethodsComponent } from './sidenav-item/payment-methods/payment-methods.component';
import { AddressesComponent } from './sidenav-item/addresses/addresses.component';
import { GiftCardsComponent } from './sidenav-item/gift-cards/gift-cards.component';
import { LogoutComponent } from './sidenav-item/logout/logout.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  selectedComponent: any;
  componentTitle: string = '';

  components: any = {
    dashboard: DashboardComponent,
    orders: OrderComponent,
    downloads: DownloadsComponent,
    giftCards: GiftCardsComponent,
    addresses:AddressesComponent,
    paymentMethods: PaymentMethodsComponent,
    accountDetails: AccountDetailsComponent,
    logout: LogoutComponent
  };

  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.selectedComponent = this.components['dashboard'];
    this.componentTitle = 'dashboard';
  }

  loadComponent(componentName: string) {
    this.selectedComponent = this.components[componentName];
    this.componentTitle = componentName.replace(/([A-Z])/g, ' $1');
    
    this.router.navigate(['/account', componentName]);
  }
}