import { Component } from '@angular/core';
import { BillingAddressFormComponent } from '../billing-address-form/billing-address-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addresses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './addresses.component.html',
  styleUrl: './addresses.component.css'
})
export class AddressesComponent {
  billingComponent: any = BillingAddressFormComponent;
  showBillingForm: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute){}

  loadComponent(){
    this.showBillingForm = true;
    this.router.navigate(['billingAddress'], { relativeTo: this.route });
  }

}
