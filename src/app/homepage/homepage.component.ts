import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HomeContentComponent } from "./components/home-content/home-content.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, HomeContentComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {

  carouselItem = [
    {
      title: 'Five Broken Blades: Deluxe Limited Edition',
      description: 'A richly developed world, a captivating ensemble cast, and a twisty, action-packed quest.',
      imageUrl: 'hero1.png',
      redirectUrl: '/login'
    },
    {
      title: 'Heavenbreaker: Deluxe Limited Edition',
      description: 'breathtaking epic, masterfully weaving threads of science fiction, fantasy, horror, romance, and ...',
      imageUrl: 'hero2.png',
      redirectUrl: '/'
    },
    {
      title: 'Five Broken Blades: Deluxe Limited Edition',
      description: 'The Thrilling Sequel To The Number One Global Bestselling Phenomenon Fourth Wing with gorgeous stenciled edges',
      imageUrl: 'hero3.png',
      redirectUrl: '/'
    }
  ]

  ngOnInit(): void {
    
  }
}
