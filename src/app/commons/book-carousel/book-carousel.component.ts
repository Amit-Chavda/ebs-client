import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-carousel.component.html',
  styleUrl: './book-carousel.component.css'
})
export class BookCarouselComponent implements OnInit {

  @Input() title: string = 'Title';
  @Input() showAddToCartBtn: any = false;

  books = [
    {
      title: 'Daydream (Maple Hills #3)',
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2024/08/Daydream.jpg?resize=300%2C456&ssl=1',
      actualPrice: 5999.00,
      offeredPrice: 4999.00
    },
    {
      title: 'Off to the Races (Gold Rush Ranch #1)',
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2024/08/Off-to-the-Races-1.jpg?fit=985%2C1500&ssl=1',
      actualPrice: 4599.00,
      offeredPrice: 3799.00
    },
    {
      title: 'Apprentice to the Villain (Assistant to the Villain #2)',
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2024/08/Apprentice-to-the-Villain.jpg?fit=962%2C1500&ssl=1',
      actualPrice: 6999.00,
      offeredPrice: 5499.00
    },
    {
      title: 'Lady Macbeth',
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2024/08/lady-macbeth.jpg?resize=300%2C451&ssl=1',
      actualPrice: 5299.00,
      offeredPrice: 4499.00
    },
    {
      title: 'Love Unwritten (Lakefront Billionaires #2)',
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2024/06/love-unwritten.jpg?fit=990%2C1500&ssl=1',
      actualPrice: 3899.00,
      offeredPrice: 3199.00
    },
    {
      title: 'Taming 7 (Boys of Tommen #5)',
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2024/04/taming-7.jpg?fit=954%2C1500&ssl=1',
      actualPrice: 4799.00,
      offeredPrice: 3999.00
    },
    {
      title: 'Reckless (The Powerless Trilogy #2)',
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2024/06/Reckless.jpg?fit=985%2C1500&ssl=1',
      actualPrice: 5499.00,
      offeredPrice: 4699.00
    }, {
      title: 'Love Unwritten (Lakefront Billionaires #2)',
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2024/06/love-unwritten.jpg?fit=990%2C1500&ssl=1',
      actualPrice: 3899.00,
      offeredPrice: 3199.00
    },
    {
      title: 'Taming 7 (Boys of Tommen #5)',
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2024/04/taming-7.jpg?fit=954%2C1500&ssl=1',
      actualPrice: 4799.00,
      offeredPrice: 3999.00
    },
    {
      title: 'Reckless (The Powerless Trilogy #2)',
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2024/06/Reckless.jpg?fit=985%2C1500&ssl=1',
      actualPrice: 5499.00,
      offeredPrice: 4699.00
    },
    {
      title: 'Love Unwritten (Lakefront Billionaires #2)',
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2024/06/love-unwritten.jpg?fit=990%2C1500&ssl=1',
      actualPrice: 3899.00,
      offeredPrice: 3199.00
    },
    {
      title: 'Taming 7 (Boys of Tommen #5)',
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2024/04/taming-7.jpg?fit=954%2C1500&ssl=1',
      actualPrice: 4799.00,
      offeredPrice: 3999.00
    },
    {
      title: 'Reckless (The Powerless Trilogy #2)',
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2024/06/Reckless.jpg?fit=985%2C1500&ssl=1',
      actualPrice: 5499.00,
      offeredPrice: 4699.00
    }
  ];

  offset = 0; // Current offset for sliding
  maxOffset = 0; // Maximum offset for sliding
  private slideWidth = 208; // Width of each slide
  private slidesToShow = 6; // Number of slides visible at a time
  private currentIndex = 0; // Current index of the first visible slide
  private totalSlides = this.books.length / this.slidesToShow;

  ngOnInit(): void {
    this.totalSlides = this.books.length;
    this.updateMaxOffset();
  }

  private updateMaxOffset(): void {
    this.maxOffset = -((this.totalSlides - this.slidesToShow) * this.slideWidth);
  }

  slideCarousel(direction: number): void {
    if (direction === 1) {
      this.currentIndex++;
      if (this.currentIndex >= this.totalSlides - this.slidesToShow) {
        this.currentIndex = 0;
      }
    } else if (direction === -1) {
      this.currentIndex--;
      if (this.currentIndex <= 0) {
        this.currentIndex = this.totalSlides - this.slidesToShow;
      }
    }
    this.offset = -this.currentIndex * this.slideWidth
  }

}


