import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment-methods',
  standalone: true,
  imports: [],
  templateUrl: './payment-methods.component.html',
  styleUrl: './payment-methods.component.css'
})
export class PaymentMethodsComponent {

  constructor(private router: Router, private route: ActivatedRoute){}

  paymentMethodForm(componentName:string){
    this.router.navigate(['paymentMethod'], { relativeTo: this.route });
  }
}
