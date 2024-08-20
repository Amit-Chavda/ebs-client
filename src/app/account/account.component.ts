import { Component, NgModule, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DashboardComponent } from '../sidenav-item/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { OrderComponent } from '../sidenav-item/order/order.component';
import { AccountDetailsComponent } from '../sidenav-item/account-details/account-details.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  components: any = {
    dashboard: DashboardComponent,
    order: OrderComponent,
    accountDetails: AccountDetailsComponent
  };

  selectedComponent: any = null;
  ngOnInit(): void {
    this.selectedComponent = this.components['dashboard'];
  }

  loadComponent(componentName: string) {
    this.selectedComponent = this.components[componentName];
  }
}