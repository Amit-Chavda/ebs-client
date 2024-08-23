import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-category-carousel',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive],
  templateUrl: './category-carousel.component.html',
  styleUrl: './category-carousel.component.css'
})
export class CategoryCarouselComponent implements OnInit {

  @Input() title: string = 'Title';

  categories = [
    {
      id: 1,
      categoryName: 'Classics',
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2023/12/clas.webp?fit=247%2C375&ssl=1'
    },
    {
      id: 2,
      categoryName: "Mystery",
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2023/12/eyJidWNrZXQiOiJwYWdlYXRlcnMtY2F0ZWdvcmllcyIsImtleSI6Im15c3Rlcnktc3VzcGVuc2UtMGVmSkNNS05BZS0xNjgxNDg1NjgyMDk4LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJoZWlnaHQiOjM3NSwid2lkdGgiOjI0NywiZml0IjoiY292ZXIifX19.webp?fit=247%2C375&ssl=1'
    },
    {
      id: 3,
      categoryName: 'Teen & Young Adult',
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2023/12/eyJidWNrZXQiOiJwYWdlYXRlcnMtY2F0ZWdvcmllcyIsImtleSI6InRlZW4teW91bmctYWR1bHQtWlgxRFI2RVI4SC0xNjgxNDg1NTkzNzc3LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJoZWlnaHQiOjM3NSwid2lkdGgiOjI0NywiZml0IjoiY292ZXIifX19.webp?fit=247%2C375&ssl=1'
    },
    {
      id: 4,
      categoryName: "Historical Fiction",
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2023/12/his.webp?fit=247%2C375&ssl=1'
    },
    {
      id: 5,
      categoryName: 'Literary Fiction',
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2023/12/eyJidWNrZXQiOiJwYWdlYXRlcnMtY2F0ZWdvcmllcyIsImtleSI6ImxpdGVyYXJ5LWZpY3Rpb24teU9IUlFLM2ZaUi0xNjgxNDg1Njk2ODYyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJoZWlnaHQiOjM3NSwid2lkdGgiOjI0NywiZml0IjoiY292ZXIifX19.webp?fit=247%2C375&ssl=1'
    },
    {
      id: 6,
      categoryName: "Biography",
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2023/12/eyJidWNrZXQiOiJwYWdlYXRlcnMtY2F0ZWdvcmllcyIsImtleSI6Im5vbi1maWN0aW9uLUpMNDlJdnF4ZWUtMTY4MTQ4NTY1OTgxMy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiaGVpZ2h0IjozNzUsIndpZHRoIjoyNDcsImZpdCI6ImNvdmVyIn19fQ.webp?fit=247%2C375&ssl=1'
    },
    {
      id: 7,
      categoryName: 'Fantasy',
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2023/12/fantasy-2.webp?fit=247%2C375&ssl=1'
    },
    {
      id: 8,
      categoryName: "Ficiones",
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2023/12/his.webp?fit=247%2C375&ssl=1'
    },
    {
      id: 1,
      categoryName: 'Classics',
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2023/12/clas.webp?fit=247%2C375&ssl=1'
    },
    {
      id: 2,
      categoryName: "Mystery",
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2023/12/eyJidWNrZXQiOiJwYWdlYXRlcnMtY2F0ZWdvcmllcyIsImtleSI6Im15c3Rlcnktc3VzcGVuc2UtMGVmSkNNS05BZS0xNjgxNDg1NjgyMDk4LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJoZWlnaHQiOjM3NSwid2lkdGgiOjI0NywiZml0IjoiY292ZXIifX19.webp?fit=247%2C375&ssl=1'
    },
    {
      id: 3,
      categoryName: 'Teen & Young Adult',
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2023/12/eyJidWNrZXQiOiJwYWdlYXRlcnMtY2F0ZWdvcmllcyIsImtleSI6InRlZW4teW91bmctYWR1bHQtWlgxRFI2RVI4SC0xNjgxNDg1NTkzNzc3LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJoZWlnaHQiOjM3NSwid2lkdGgiOjI0NywiZml0IjoiY292ZXIifX19.webp?fit=247%2C375&ssl=1'
    },
    {
      id: 4,
      categoryName: "Historical Fiction",
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2023/12/his.webp?fit=247%2C375&ssl=1'
    },
    {
      id: 5,
      categoryName: 'Literary Fiction',
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2023/12/eyJidWNrZXQiOiJwYWdlYXRlcnMtY2F0ZWdvcmllcyIsImtleSI6ImxpdGVyYXJ5LWZpY3Rpb24teU9IUlFLM2ZaUi0xNjgxNDg1Njk2ODYyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJoZWlnaHQiOjM3NSwid2lkdGgiOjI0NywiZml0IjoiY292ZXIifX19.webp?fit=247%2C375&ssl=1'
    },
    {
      id: 6,
      categoryName: "Biography",
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2023/12/eyJidWNrZXQiOiJwYWdlYXRlcnMtY2F0ZWdvcmllcyIsImtleSI6Im5vbi1maWN0aW9uLUpMNDlJdnF4ZWUtMTY4MTQ4NTY1OTgxMy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiaGVpZ2h0IjozNzUsIndpZHRoIjoyNDcsImZpdCI6ImNvdmVyIn19fQ.webp?fit=247%2C375&ssl=1'
    },
    {
      id: 7,
      categoryName: 'Fantasy',
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2023/12/fantasy-2.webp?fit=247%2C375&ssl=1'
    },
    {
      id: 8,
      categoryName: "Ficiones",
      imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2023/12/his.webp?fit=247%2C375&ssl=1'
    }
  ]



  offset = 0; // Current offset for sliding
  maxOffset = 0; // Maximum offset for sliding
  private slideWidth = 150; // Width of each slide
  private slidesToShow = 8; // Number of slides visible at a time
  private currentIndex = 0; // Current index of the first visible slide
  private totalSlides = this.categories.length / this.slidesToShow;

  ngOnInit(): void {
    this.totalSlides = this.categories.length;
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
      if (this.currentIndex < 0) {
        this.currentIndex = this.totalSlides - this.slidesToShow;
      }
    }
    this.offset = -this.currentIndex * this.slideWidth
  }

}
