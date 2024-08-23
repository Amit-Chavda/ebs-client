import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BookCarouselComponent } from '../commons/book-carousel/book-carousel.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, BookCarouselComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  product = {
    title: "And Then There Were None (The World’s Favourite Agatha Christie Book)",
    imageUrl: 'https://i0.wp.com/pageaters.com/wp-content/uploads/2023/12/and-then-there-were-none.jpg?fit=979%2C1500&ssl=1',
    currencySign: '$',
    price: {
      original: 399.00,
      current: 349.00
    },
    availability: "Available, Ready To Ship!",
    shipping_info: "Ships in 2-3 Days. Approximate delivery in 5-7 business days.",
    wishlist: "Browse wishlist",
    sku: "BK-7857969264",
    category: ["Classics", "Mystery"],
    additional_information: {
      edition: "paperback",
      pages: 256,
      author: "Agatha Christie",
      language: "EN",
      isbn: "978-0008123208",
      publication: "Harper Collins",
      publication_year: 2017,
      specs: "12.9 X 1.63 X 19.8"
    },
    description: "First, there were ten—a curious assortment of strangers summoned as weekend guests to a little private island off the coast of Devon. Their host, an eccentric millionaire unknown to all of them, is nowhere to be found. All that the guests have in common is a wicked past they’re unwilling to reveal—and a secret that will seal their fate. For each has been marked for murder. A famous nursery rhyme is framed and hung in every room of the mansion:\n\n“Ten little boys went out to dine; One choked his little self and then there were nine. Nine little boys sat up very late; One overslept himself and then there were eight. Eight little boys traveling in Devon; One said he’d stay there then there were seven. Seven little boys chopping up sticks; One chopped himself in half and then there were six. Six little boys playing with a hive; A bumblebee stung one and then there were five. Five little boys going in for law; One got in Chancery and then there were four. Four little boys going out to sea; A red herring swallowed one and then there were three. Three little boys walking in the zoo; A big bear hugged one and then there were two. Two little boys sitting in the sun; One got frizzled up and then there was one. One little boy left all alone; He went out and hanged himself and then there were none.”\n\nWhen they realize that murders are occurring as described in the rhyme, terror mounts. One by one they fall prey. Before the weekend is out, there will be none. Who has choreographed this dastardly scheme? And who will be left to tell the tale? Only the dead are above suspicion.",
    reviews: []
  }


}
