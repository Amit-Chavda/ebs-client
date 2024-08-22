import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gift-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gift-cards.component.html',
  styleUrl: './gift-cards.component.css'
})
export class GiftCardsComponent {
  haveData: boolean = false;
}
