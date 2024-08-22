import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: ' account-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.css'
})
export class AccountDetailsComponent {

  currencies = [
    { label: '$ USD', value: 'USD' },
    { label: '€ EUR', value: 'EUR' },
    { label: '£ GBP', value: 'GBP' },
    { label: '¥ JPY', value: 'JPY' },
    { label: '₣ CHF', value: 'CHF' },
    { label: '₽ RUB', value: 'RUB' },
    { label: '₹ INR', value: 'INR' },
    { label: '$ AUD', value: 'AUD' },
    { label: '$ CAD', value: 'CAD' },
    { label: 'R$ BRL', value: 'BRL' },
    { label: '$ NZD', value: 'NZD' },
    { label: '₣ XOF', value: 'XOF' },
    { label: '₺ TRY', value: 'TRY' },
    { label: '₴ UAH', value: 'UAH' },
    { label: '₿ BTC', value: 'BTC' }
  ];

}
