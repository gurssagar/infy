import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-project';
  tours = [
    {
      id: 1,
      name: 'Paris Explorer',
      price: 1299,
      duration: '7 days',
      description: 'Discover the magic of Paris',
      image: 'https://tse4.mm.bing.net/th?id=OIP.Sd6SawtBE9iEBEPlZHYFrwHaMV&pid=Api',
      images: [
        'https://tse4.mm.bing.net/th?id=OIP.Sd6SawtBE9iEBEPlZHYFrwHaMV&pid=Api',
        'https://tse1.mm.bing.net/th?id=OIP.pkJ91bzKpWl2L72AS0dDOwHaE8&pid=Api',
        'https://tse1.mm.bing.net/th?id=OIP.N-4OyxKjL_P-vB5egpuCMwHaE7&pid=Api'
      ]
    },
    {
      id: 2,
      name: 'Tokyo Adventure',
      price: 2499,
      duration: '10 days',
      description: 'Experience modern Japan',
      image: 'https://tse2.mm.bing.net/th?id=OIP.jZTtZhFFjhHgDs4CYbrpAwHaLH&pid=Api',
      images: [
        'https://tse2.mm.bing.net/th?id=OIP.jZTtZhFFjhHgDs4CYbrpAwHaLH&pid=Api',
        'https://tse4.mm.bing.net/th?id=OIP.zSIRnrkdFHlxbNfeZ--shQHaFj&pid=Api',
        'https://tse1.mm.bing.net/th?id=OIP.oJwIIsJXLC0tGHXsBZUObgHaEK&pid=Api'
      ]
    },
    {
      id: 3,
      name: 'Rome Classic',
      price: 1599,
      duration: '8 days',
      description: 'Walk through ancient history',
      image: 'https://tse4.mm.bing.net/th?id=OIP.uFEcW-KOPCczGYlvm1aRngHaE8&pid=Api',
      images: [
        'https://tse4.mm.bing.net/th?id=OIP.uFEcW-KOPCczGYlvm1aRngHaE8&pid=Api',
        'https://tse4.mm.bing.net/th?id=OIP.ZXsrBP3AneUemU9FVFYhvQHaE6&pid=Api',
        'https://tse2.mm.bing.net/th?id=OIP.Tlw1tXjse0UXXy4C4mZIaAHaE8&pid=Api'
      ]
    },
    {
      id: 4,
      name: 'New York City Lights',
      price: 1999,
      duration: '5 days',
      description: 'Feel the energy of NYC',
      image: 'https://tse2.mm.bing.net/th?id=OIP.NYCImage1',
      images: [
        'https://tse2.mm.bing.net/th?id=OIP.NYCImage1',
        'https://tse1.mm.bing.net/th?id=OIP.NYCImage2',
        'https://tse3.mm.bing.net/th?id=OIP.NYCImage3'
      ]
    },
    {
      id: 5,
      name: 'Sydney Escape',
      price: 2199,
      duration: '6 days',
      description: 'Discover the beauty of Sydney',
      image: 'https://tse2.mm.bing.net/th?id=OIP.SydneyImage1',
      images: [
        'https://tse2.mm.bing.net/th?id=OIP.SydneyImage1',
        'https://tse4.mm.bing.net/th?id=OIP.SydneyImage2',
        'https://tse1.mm.bing.net/th?id=OIP.SydneyImage3'
      ]
    },
    {
      id: 6,
      name: 'Cape Town Adventure',
      price: 1499,
      duration: '7 days',
      description: 'Explore the wonders of South Africa',
      image: 'capetown.jpg',
      images: [
        'https://tse1.mm.bing.net/th?id=OIP.CapeTownImage1',
        'https://tse2.mm.bing.net/th?id=OIP.CapeTownImage2',
        'https://tse3.mm.bing.net/th?id=OIP.CapeTownImage3'
      ]
    },
    {
      id: 7,
      name: 'Santorini Getaway',
      price: 1399,
      duration: '5 days',
      description: 'Relax in the picturesque Greek islands',
      image: 'santorini.jpg',
      images: [
        'https://tse1.mm.bing.net/th?id=OIP.SantoriniImage1',
        'https://tse2.mm.bing.net/th?id=OIP.SantoriniImage2',
        'https://tse3.mm.bing.net/th?id=OIP.SantoriniImage3'
      ]
    },
    {
      id: 8,
      name: 'Dubai Luxury',
      price: 2999,
      duration: '4 days',
      description: 'Experience the opulence of Dubai',
      image: 'dubai.jpg',
      images: [
        'https://tse1.mm.bing.net/th?id=OIP.DubaiImage1',
        'https://tse2.mm.bing.net/th?id=OIP.DubaiImage2',
        'https://tse3.mm.bing.net/th?id=OIP.DubaiImage3'
      ]
    }
  ];
}
