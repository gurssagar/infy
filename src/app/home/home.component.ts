import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tours = [
    {
      id: 'a1b2c3d4',
      name: 'Paris Explorer',
      price: 1299,
      duration: '7 days',
      description: 'Discover the magic of Paris',
      description2: 'Explore iconic landmarks and savor French cuisine',
      image: 'https://images.unsplash.com/photo-1522092787784-8bfa7a8db9db',
      images: [
        'https://images.unsplash.com/photo-1522092787784-8bfa7a8db9db',
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
        'https://images.unsplash.com/photo-1604917877936-c1f64fdcbc24'
      ],
      destination: 'Paris, France',
      departure: 'New York City, USA',
      departureTime: '2024-04-15T09:00:00',
      returnTime: '2024-04-22T20:00:00',
      dressCode: 'Smart Casual'
    },
    {
      id: 'e5f6g7h8',
      name: 'Tokyo Adventure',
      price: 2499,
      duration: '10 days',
      description: 'Experience modern Japan',
      description2: 'Immerse yourself in the vibrant culture of Tokyo',
      image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c',
      images: [
        'https://images.unsplash.com/photo-1549692520-acc6669e2f0c',
        'https://images.unsplash.com/photo-1584096819594-09b79b3a7334',
        'https://images.unsplash.com/photo-1543163521-1bf0e6e68f50'
      ],
      destination: 'Tokyo, Japan',
      departure: 'Los Angeles, USA',
      departureTime: '2024-05-10T07:30:00',
      returnTime: '2024-05-20T23:00:00',
      dressCode: 'Comfortable Travel Wear'
    },
    {
      id: 'i9j0k1l2',
      name: 'Rome Classic',
      price: 1599,
      duration: '8 days',
      description: 'Walk through ancient history',
      description2: 'Discover the timeless beauty of Rome',
      image: 'https://images.unsplash.com/photo-1533850595620-77ef3508b67b',
      images: [
        'https://images.unsplash.com/photo-1533850595620-77ef3508b67b',
        'https://images.unsplash.com/photo-1589308078056-cb45e3c2c7b3',
        'https://images.unsplash.com/photo-1543349685-163f0074a12d'
      ],
      destination: 'Rome, Italy',
      departure: 'Chicago, USA',
      departureTime: '2024-06-05T10:00:00',
      returnTime: '2024-06-13T19:00:00',
      dressCode: 'Casual and Comfortable'
    },
    {
      id: 'm3n4o5p6',
      name: 'New York City Lights',
      price: 1999,
      duration: '5 days',
      description: 'Feel the energy of NYC',
      description2: 'Explore the city that never sleeps',
      image: 'https://images.unsplash.com/photo-1534430480878-299ef0109f1e',
      images: [
        'https://images.unsplash.com/photo-1534430480878-299ef0109f1e',
        'https://images.unsplash.com/photo-1566842933036-3ab6b9ddc1e2',
        'https://images.unsplash.com/photo-1495195134817-aeb325a55b65'
      ],
      destination: 'New York City, USA',
      departure: 'Toronto, Canada',
      departureTime: '2024-03-20T08:00:00',
      returnTime: '2024-03-25T22:00:00',
      dressCode: 'Business Casual'
    },
    {
      id: 'q7r8s9t0',
      name: 'Sydney Escape',
      price: 2199,
      duration: '6 days',
      description: 'Discover the beauty of Sydney',
      description2: 'Enjoy the stunning beaches and landmarks',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
      images: [
        'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
        'https://images.unsplash.com/photo-1564446831954-e9fb9c928f67',
        'https://images.unsplash.com/photo-1532989029401-4396150d7b8a'
      ],
      destination: 'Sydney, Australia',
      departure: 'San Francisco, USA',
      departureTime: '2024-07-10T06:30:00',
      returnTime: '2024-07-16T23:30:00',
      dressCode: 'Beach Wear'
    }
  ];


}