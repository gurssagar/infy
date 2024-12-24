import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit {
  message = 'Initial Message';
  tours = [
    {
      id: 'a1b2c3d4',
      name: 'Paris Explorer',
      price: 1299,
      duration: '7 days',
      description: 'Discover the magic of Paris',
      description2: 'Explore iconic landmarks and savor French cuisine',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/3/3d/Louvre_Museum_Wikimedia_Commons.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/1/10/Notre_Dame_de_Paris_Wikimedia_Commons.jpg'
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
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Tokyo_Tower_and_Skyline_Wikimedia_Commons.jpg',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/1/1e/Tokyo_Tower_and_Skyline_Wikimedia_Commons.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/6/67/Sensoji_Temple_Tokyo_Wikimedia_Commons.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/4/4b/Shibuya_Crossing_Tokyo_Wikimedia_Commons.jpg'
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
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/e/e0/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/a/ae/Trevi_Fountain_in_Rome_Wikimedia_Commons.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/4/44/St_Peter%27s_Basilica_in_Vatican_City.jpg'
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
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Times_Square_NYC_Wikimedia_Commons.jpg',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/3/3d/Times_Square_NYC_Wikimedia_Commons.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/4/49/Brooklyn_Bridge_New_York_Wikimedia_Commons.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/7/7a/Central_Park_NYC_Wikimedia_Commons.jpg'
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
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Sydney_Opera_House_Wikimedia_Commons.jpg',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/b/b4/Sydney_Opera_House_Wikimedia_Commons.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/3/34/Sydney_Harbour_Bridge_Wikimedia_Commons.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/f/f0/Bondi_Beach_Sydney_Wikimedia_Commons.jpg'
      ],
      destination: 'Sydney, Australia',
      departure: 'San Francisco, USA',
      departureTime: '2024-07-10T06:30:00',
      returnTime: '2024-07-16T23:30:00',
      dressCode: 'Beach Wear'
    }
    // Add similar structures for other tours
  ];



  tourDescription: string | undefined;
  tourName: string | undefined;
  tourPrice: number | undefined;
  tourDuration: string | undefined;
  tourImages: string[] | undefined;
  tourDestination: string | undefined;
  tourDeparture: string | undefined;
  tourDepartureTime: string | undefined;
  tourReturnTime: string | undefined;
  tourDressCode: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const tourId = params.get('id');
      if (tourId) {
        const tour = this.tours.find(t => t.id === tourId);
        if (tour) {
          this.tourDescription = tour.description;
          this.tourName = tour.name;
          this.tourPrice = tour.price;
          this.tourDuration = tour.duration;
          this.tourImages = tour.images;
          this.tourDestination = tour.destination;
          this.tourDeparture = tour.departure;
          this.tourDepartureTime = tour.departureTime;
          this.tourReturnTime = tour.returnTime;
          this.tourDressCode = tour.dressCode;
        } else {
          this.tourDescription = 'Description not found';
        }
      }
    });
  }
}
