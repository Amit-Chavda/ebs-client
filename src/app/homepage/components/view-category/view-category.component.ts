import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-view-category',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './view-category.component.html',
  styleUrl: './view-category.component.css'
})
export class ViewCategoryComponent implements OnInit  {

  @Input() title: string = 'Title';


  priceFilter = [
    {
      "label": "Under 50",
      "min": 0,
      "max": 50
    },
    {
      "label": "50 - 100",
      "min": 50,
      "max": 100
    },
    {
      "label": "100 - 250",
      "min": 100,
      "max": 250
    },
    {
      "label": "250 - 500",
      "min": 250,
      "max": 500
    },
    {
      "label": "500 - 1,000",
      "min": 500,
      "max": 1000
    },
    {
      "label": "1,000 - 2,500",
      "min": 1000,
      "max": 2500
    },
    {
      "label": "2,500 - 5,000",
      "min": 2500,
      "max": 5000
    },
    {
      "label": "5,000 - 10,000",
      "min": 5000,
      "max": 10000
    },
    {
      "label": "Above 10,000",
      "min": 10000,
      "max": null
    }
  ];

  publisherList = [
    {
      "publisher": "Sourcebooks",
      "quantity": 1
    },
    {
      "publisher": "Bloom Books",
      "quantity": 9
    },
    {
      "publisher": "Bloomsbury",
      "quantity": 16
    },
    {
      "publisher": "Bloomsbury Publications",
      "quantity": 8
    },
    {
      "publisher": "Simon & Schuster",
      "quantity": 1
    },
    {
      "publisher": "Westland",
      "quantity": 3
    },
    {
      "publisher": "Bloomsbury Publishing",
      "quantity": 7
    },
    {
      "publisher": "Raven Books (Bloomsbury Publishing)",
      "quantity": 1
    },
    {
      "publisher": "Bloomsbury YA",
      "quantity": 2
    },
    {
      "publisher": "Tor Fantasy",
      "quantity": 1
    },
    {
      "publisher": "Penguin",
      "quantity": 8
    },
    {
      "publisher": "RHUK",
      "quantity": 1
    },
    {
      "publisher": "Vintage",
      "quantity": 3
    },
    {
      "publisher": "Harper Voyager",
      "quantity": 6
    },
    {
      "publisher": "HarperCollins",
      "quantity": 7
    },
    {
      "publisher": "HarperVoyager",
      "quantity": 25
    },
    {
      "publisher": "Sphere",
      "quantity": 1
    },
    {
      "publisher": "Orion Children’s Books",
      "quantity": 6
    },
    {
      "publisher": "Orion",
      "quantity": 9
    },
    {
      "publisher": "Hodder & Stoughton",
      "quantity": 5
    },
    {
      "publisher": "Electric Monkey",
      "quantity": 13
    },
    {
      "publisher": "Mantle",
      "quantity": 2
    },
    {
      "publisher": "Orbit",
      "quantity": 5
    },
    {
      "publisher": "Macmillan",
      "quantity": 1
    },
    {
      "publisher": "Gollancz",
      "quantity": 8
    },
    {
      "publisher": "Canongate Books",
      "quantity": 1
    },
    {
      "publisher": "Hot Key Books",
      "quantity": 8
    },
    {
      "publisher": "Macmillan US",
      "quantity": 1
    },
    {
      "publisher": "Tor",
      "quantity": 11
    },
    {
      "publisher": "Del Rey",
      "quantity": 2
    },
    {
      "publisher": "Bookbuggs",
      "quantity": 1
    },
    {
      "publisher": "Pan Macmillan",
      "quantity": 4
    },
    {
      "publisher": "Piatkus",
      "quantity": 4
    },
    {
      "publisher": "Picador India",
      "quantity": 1
    },
    {
      "publisher": "Hodder Paperbacks",
      "quantity": 6
    },
    {
      "publisher": "Viking",
      "quantity": 1
    },
    {
      "publisher": "Bloomsbury India",
      "quantity": 2
    },
    {
      "publisher": "Headline Eternal",
      "quantity": 3
    },
    {
      "publisher": "Bloomsbury Publishing India",
      "quantity": 1
    },
    {
      "publisher": "Simon & Schuster Ltd",
      "quantity": 3
    },
    {
      "publisher": "HarperTeen",
      "quantity": 3
    },
    {
      "publisher": "Farshore",
      "quantity": 1
    },
    {
      "publisher": "Abacus",
      "quantity": 1
    },
    {
      "publisher": "The Borough Press",
      "quantity": 1
    },
    {
      "publisher": "Vintage Children’s Classics",
      "quantity": 1
    },
    {
      "publisher": "Hodder",
      "quantity": 7
    },
    {
      "publisher": "Bonnier",
      "quantity": 1
    },
    {
      "publisher": "Bloomsbury Publishing India Pvt Ltd",
      "quantity": 1
    },
    {
      "publisher": "Hodder Paperback",
      "quantity": 1
    },
    {
      "publisher": "Titan Books",
      "quantity": 1
    },
    {
      "publisher": "Titan",
      "quantity": 1
    },
    {
      "publisher": "Hachette",
      "quantity": 6
    },
    {
      "publisher": "PanMacmillan India",
      "quantity": 1
    },
    {
      "publisher": "Independently Published",
      "quantity": 1
    },
    {
      "publisher": "Titan Books Ltd",
      "quantity": 1
    },
    {
      "publisher": "Pan Macmillan Publishing",
      "quantity": 1
    },
    {
      "publisher": "Hodderscape",
      "quantity": 7
    },
    {
      "publisher": "Hatchett",
      "quantity": 1
    },
    {
      "publisher": "Solaris",
      "quantity": 1
    },
    {
      "publisher": "Sarah J. Maas",
      "quantity": 1
    },
    {
      "publisher": "Penguin Classics",
      "quantity": 1
    },
    {
      "publisher": "Magpie",
      "quantity": 2
    },
    {
      "publisher": "Macmillan Children’s Books",
      "quantity": 2
    },
    {
      "publisher": "UK Children’s",
      "quantity": 1
    },
    {
      "publisher": "Blue Box Press",
      "quantity": 1
    },
    {
      "publisher": "Inkyard Press",
      "quantity": 1
    },
    {
      "publisher": "Penguin Books Ltd",
      "quantity": 2
    },
    {
      "publisher": "Harry N. Abrams",
      "quantity": 1
    },
    {
      "publisher": "Jenna Crannage",
      "quantity": 6
    },
    {
      "publisher": "Quercus Children’s Books",
      "quantity": 1
    },
    {
      "publisher": "Tor Bramble",
      "quantity": 1
    },
    {
      "publisher": "Lauren Roberts",
      "quantity": 1
    },
    {
      "publisher": "One More Chapter",
      "quantity": 1
    }
  ];

  editionList = [
    {
      "edition": "Paperback",
      "quantity": 258
    },
    {
      "edition": "Hardcover",
      "quantity": 34
    },
    {
      "edition": "Mass market paperback",
      "quantity": 1
    }
  ];

  categories = [
    {
      "name": "Dark Academia",
      "quantity": 99
    },
    {
      "name": "Dark Fantasy",
      "quantity": 33
    },
    {
      "name": "Dystopian Fiction",
      "quantity": 2525
    },
    {
      "name": "Romantasy",
      "quantity": 56
    }
  ]

  sortingCategories = [
    'Default sorting',
    'Price: Low to High',
    'Price: High to Low',
    'Release Date: Newest First',
    'Release Date: Oldest First'
  ]

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
    window.scrollTo(0, 0);
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
