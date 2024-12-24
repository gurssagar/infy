import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-compare',
  standalone: true,
  imports: [],
  templateUrl: './compare.component.html',
  styleUrl: './compare.component.css'
})
export class CompareComponent {
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    },
    {
      id: 'u1v2w3x4',
      name: 'Cape Town Adventure',
      price: 1499,
      duration: '7 days',
      description: 'Explore the wonders of South Africa',
      description2: 'Discover breathtaking landscapes and wildlife',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Table_Mountain_Cape_Town_Wikimedia_Commons.jpg',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/e/e1/Table_Mountain_Cape_Town_Wikimedia_Commons.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/d/d4/Cape_Point_Cape_Town_Wikimedia_Commons.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/5/59/Boulders_Beach_Penguins_Cape_Town.jpg'
      ]
    },
    {
      id: 'y5z6a7b8',
      name: 'Santorini Getaway',
      price: 1399,
      duration: '5 days',
      description: 'Relax in the picturesque Greek islands',
      description2: 'Enjoy the stunning sunsets and blue domes',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Santorini_Oia_Sunset_Wikimedia_Commons.jpg',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/4/4e/Santorini_Oia_Sunset_Wikimedia_Commons.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/3/34/Santorini_Blue_Domes_Wikimedia_Commons.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/7/75/Santorini_Cliff_View_Wikimedia_Commons.jpg'
      ]
    },
    {
      id: 'c9d0e1f2',
      name: 'Dubai Luxury',
      price: 2999,
      duration: '4 days',
      description: 'Experience the opulence of Dubai',
      description2: 'Indulge in luxury and modern architecture',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Burj_Khalifa_Dubai_Wikimedia_Commons.jpg',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/0/0c/Burj_Khalifa_Dubai_Wikimedia_Commons.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/8b/Palm_Jumeirah_Dubai_Wikimedia_Commons.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/5/5b/Dubai_Marina_Skyline_Wikimedia_Commons.jpg'
      ]
    }
  ];

  tourDescription: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const tourId = params.get('id');
      if (tourId) {
        const tour = this.tours.find(t => t.id === tourId);
        this.tourDescription = tour ? tour.description : 'Description not found';
      }
    });
  }
}
