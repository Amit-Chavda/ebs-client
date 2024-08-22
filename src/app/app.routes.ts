import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AccountComponent } from './account/account.component';
import { OrderComponent } from './account/sidenav-item/order/order.component';
import { DashboardComponent } from './account/sidenav-item/dashboard/dashboard.component';
import { AccountDetailsComponent } from './account/sidenav-item/account-details/account-details.component';
import { DownloadsComponent } from './account/sidenav-item/downloads/downloads.component';
import { PaymentMethodsComponent } from './account/sidenav-item/payment-methods/payment-methods.component';
import { AddressesComponent } from './account/sidenav-item/addresses/addresses.component';
import { GiftCardsComponent } from './account/sidenav-item/gift-cards/gift-cards.component';
import { BillingAddressFormComponent } from './account/sidenav-item/billing-address-form/billing-address-form.component';
import { LogoutComponent } from './account/sidenav-item/logout/logout.component';
import { WishlistComponent } from './wishlist/wishlist.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '', component: HomepageComponent },
  { path: 'account', component: AccountComponent, 
    children: [  
      { path: 'dashboard', component: DashboardComponent },
      { path: 'orders', component: OrderComponent },
      { path: 'accountDetails', component: AccountDetailsComponent },
      { path: 'downloads', component: DownloadsComponent },
      { path: 'paymentMethods', component: PaymentMethodsComponent },
      { path: 'addresses', component: AddressesComponent },
      { path: 'billingAddress', component: BillingAddressFormComponent },
      { path: 'giftCards', component: GiftCardsComponent },
      { path: 'logout', component: LogoutComponent } 
    ] },
    { path: 'wishlist', component: WishlistComponent }
];
