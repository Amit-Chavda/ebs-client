import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BookCarouselComponent } from '../../../commons/book-carousel/book-carousel.component';
import { ViewCategoryComponent } from '../view-category/view-category.component';
import { CategoryCarouselComponent } from './components/category-carousel/category-carousel.component';

@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ViewCategoryComponent, BookCarouselComponent, CategoryCarouselComponent],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.css'
})
export class HomeContentComponent {

}
