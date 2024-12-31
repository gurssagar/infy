import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import {SearchComponent} from "../search/search.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    RouterOutlet,
    RouterLink,
    SearchComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tours = [
    {
      id: "o7p8q9r0",
      name: "Taj Mahal Splendor",
      price: 1499,
      duration: "3 days",
      description: "Witness the epitome of love",
      description2: "Visit the iconic Taj Mahal and explore Agra Fort and local markets for a cultural experience.",
      image: "http://wallsdesk.com/wp-content/uploads/2016/05/Taj-Mahal-Indian-Monument-Ultra-HD-Desktop-Wallpaper.jpg",
      images: [
        "https://images.unsplash.com/photo-1553524577-cb6bb5b60154",
        "https://images.unsplash.com/photo-1566213185062-17f9ee8fa5e3",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
      ],
      destination: "Agra, India",
      departure: "Delhi, India",
      departureTime: "2024-08-10T06:00:00",
      returnTime: "2024-08-13T20:00:00",
      dressCode: "Traditional Ethnic"
    }, 
      {
        id: "a1b2c3d4",
        name: "Paris Gateway",
        price: 2499,
        duration: "5 days",
        description: "Explore the romantic streets of Paris",
        description2: "Visit iconic landmarks like the Eiffel Tower, Louvre Museum, and enjoy the city's charming cafes.",
        image: "https://www.hdwallpapers.in/download/aerial_view_of_lighting_eiffel_tower_and_paris_city_during_sunset_4k_5k_hd_travel-3840x2160.jpg",
        images: [
          "https://tse3.mm.bing.net/th?id=OIP.l1px3o9JmlGdl15WmfnFlwHaDt&pid=Api&P=0&h=180",
          "https://tse3.mm.bing.net/th?id=OIP.OGFEDUC8a6AA_i3HnTMq4gHaE8&pid=Api&P=0&h=180",
          "https://tse4.mm.bing.net/th?id=OIP.9GPFI1QIq1RIfTS5YLrQnAHaEu&pid=Api&P=0&h=180"
        ],
        destination: "Paris, France",
        departure: "Los Angeles, USA",
        departureTime: "2024-08-01T09:00:00",
        returnTime: "2024-08-06T20:00:00",
        dressCode: "Casual"
      },
      {
        id: "e5f6g7h8",
        name: "Tokyo Adventure",
        price: 2799,
        duration: "7 days",
        description: "Immerse yourself in the bustling metropolis of Tokyo",
        description2: "Experience traditional temples, visit modern districts like Shibuya, and enjoy sushi and shopping.",
        image: "https://wallpaperaccess.com/full/19067.jpg",
        images: [
          "https://images.unsplash.com/photo-1504530179534-2b804a5937c9",
          "https://images.unsplash.com/photo-1588533930437-44a62be905a7",
          "https://images.unsplash.com/photo-1579212978950-18d91f271d69"
        ],
        destination: "Tokyo, Japan",
        departure: "San Francisco, USA",
        departureTime: "2024-09-05T10:30:00",
        returnTime: "2024-09-12T22:30:00",
        dressCode: "Smart Casual"
      },
      {
        id: "i9j0k1l2",
        name: "Rome Highlights",
        price: 2199,
        duration: "6 days",
        description: "Walk through the history of ancient Rome",
        description2: "Visit the Colosseum, Roman Forum, and Vatican City, and savor traditional Italian food.",
        image: "https://wallpapercave.com/wp/wp4737797.jpg",
        images: [
          "https://images.unsplash.com/photo-1560246354-00d1660e0f94",
          "https://images.unsplash.com/photo-1566986336-73023155cd36",
          "https://images.unsplash.com/photo-1541021296-0b5e6c42efee"
        ],
        destination: "Rome, Italy",
        departure: "New York City, USA",
        departureTime: "2024-09-15T07:30:00",
        returnTime: "2024-09-21T19:00:00",
        dressCode: "Casual"
      },
      {
        id: "m3n4o5p6",
        name: "New York City Vibes",
        price: 2999,
        duration: "5 days",
        description: "Experience the energy of New York City",
        description2: "See Times Square, Central Park, Broadway shows, and taste local delicacies.",
        image: "https://www.wallpaperflare.com/static/171/303/761/cityscape-new-york-city-sunset-new-wallpaper.jpg",
        images: [
          "https://images.unsplash.com/photo-1542091029-ff946dc73a1d",
          "https://images.unsplash.com/photo-1516728778222-3547e89d627f",
          "https://images.unsplash.com/photo-1505775173335-9a973c5100f0"
        ],
        destination: "New York City, USA",
        departure: "London, UK",
        departureTime: "2024-10-10T08:00:00",
        returnTime: "2024-10-15T18:00:00",
        dressCode: "Smart Casual"
      },
      {
        id: "q7r8s9t0",
        name: "Sydney Escapade",
        price: 2399,
        duration: "6 days",
        description: "Explore the stunning beauty of Sydney",
        description2: "See the Sydney Opera House, Bondi Beach, and explore local markets and restaurants.",
        image: "https://images7.alphacoders.com/716/thumb-1920-716104.jpg",
        images: [
          "https://images.unsplash.com/photo-1542692799-b687b6c0db61",
          "https://images.unsplash.com/photo-1533855813-212319fbf2da",
          "https://images.unsplash.com/photo-1533028692709-90d1e8c02c6f"
        ],
        destination: "Sydney, Australia",
        departure: "London, UK",
        departureTime: "2024-11-05T09:00:00",
        returnTime: "2024-11-11T22:00:00",
        dressCode: "Casual"
      },
    {
      id: 'q7r8s9t0',
      name: 'Bali Getaway',
      price: 1799,
      duration: '6 days',
      description: 'Relax and unwind in Bali',
      description2: 'Enjoy Bali lush landscapes, tranquil beaches, and vibrant culture, perfect for relaxation or adventure.',
      image: 'https://www.hdwallpapers.in/download/temple_in_water_with_reflection_bali_indonesia_pura_ulun_danu_bratan_during_sunset_hd_travel-HD.jpg',
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
    },
    {
      id: 'q7r8s9t0',
      name: 'London Discovery',
      price: 2199,
      duration: '6 days',
      description: 'Explore the charm of London',
      description2: 'Discover London iconic landmarks like the Tower of London, Buckingham Palace, and the British Museum, blending history and modernity.',
      image: 'https://wallpaperaccess.com/full/466325.jpg',
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
    },
    {
      id: 'q7r8s9t0',
      name: 'Dubai Adventure',
      price: 2199,
      duration: '6 days',
      description: 'Discover the beauty of Sydney',
      description2: 'Explore Dubai stunning architecture, world-class shopping, and exciting attractions like the Burj Khalifa and Desert Safari.',
      image: 'https://wallpaperaccess.com/full/222685.jpg',
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
    },
    {
      id: 'q7r8s9t0',
      name: 'Amsterdam Vibes',
      price: 2199,
      duration: '6 days',
      description: 'Experience the beauty of the canals',
      description2: 'Take a canal cruise through Amsterdam, visit the Anne Frank House, and enjoy the city art museums and vibrant nightlife.',
      image: 'http://www.pixelstalk.net/wp-content/uploads/2016/10/Amsterdam-Wallpaper-HD.jpg',
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
    },

  
      {
        id: "a1b2c3d4",
        name: "Maldives Retreat",
        price: 2499,
        duration: "7 days",
        description: "A paradise for relaxation and adventure",
        description2: "Enjoy turquoise waters, white sandy beaches, and luxury overwater villas in the Maldives.",
        image: "https://images.hdqwalls.com/download/maldives-resorts-huts-over-water-22-1920x1080.jpg",
        images: [
          "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
          "https://images.unsplash.com/photo-1580962547180-73ba1cda8d97",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        ],
        destination: "Malé, Maldives",
        departure: "London, UK",
        departureTime: "2024-08-05T10:00:00",
        returnTime: "2024-08-12T22:00:00",
        dressCode: "Resort Wear"
      },
      {
        id: "e5f6g7h8",
        name: "Bangkok Delight",
        price: 1799,
        duration: "5 days",
        description: "Experience the vibrant culture of Bangkok",
        description2: "Explore the Grand Palace, floating markets, and delicious street food in Thailand's capital.",
        image: "https://wallpaperaccess.com/full/1375413.jpg",
        images: [
          "https://images.unsplash.com/photo-1566996603016-1a6336c7b681",
          "https://images.unsplash.com/photo-1575659164485-4b1562b2e424",
          "https://images.unsplash.com/photo-1586348943529-beaae6c28db9"
        ],
        destination: "Bangkok, Thailand",
        departure: "New York City, USA",
        departureTime: "2024-09-12T07:30:00",
        returnTime: "2024-09-17T20:30:00",
        dressCode: "Casual Wear"
      },
      {
        id: "i9j0k1l2",
        name: "Singapore Splendor",
        price: 2199,
        duration: "6 days",
        description: "A futuristic and cultural hub",
        description2: "Visit Marina Bay Sands, Gardens by the Bay, and enjoy diverse cuisines in Singapore.",
        image: "https://wallpapercave.com/wp/wp2112995.jpg",
        images: [
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
          "https://images.unsplash.com/photo-1564694202779-bc908c327862",
          "https://images.unsplash.com/photo-1587929869100-7e09f0109b44"
        ],
        destination: "Singapore",
        departure: "Sydney, Australia",
        departureTime: "2024-10-15T09:00:00",
        returnTime: "2024-10-21T23:59:00",
        dressCode: "Smart Casual"
      },
      {
        id: "m3n4o5p6",
        name: "Istanbul Odyssey",
        price: 1999,
        duration: "6 days",
        description: "Where East meets West",
        description2: "Discover the Hagia Sophia, Blue Mosque, and the bustling Grand Bazaar in Istanbul.",
        image: "https://images.alphacoders.com/533/533992.jpg",
        images: [
          "https://images.unsplash.com/photo-1568781238134-bf9ac857cc00",
          "https://images.unsplash.com/photo-1578471729285-dc1a80c9f8ec",
          "https://images.unsplash.com/photo-1598096310068-b7d5086c4c68"
        ],
        destination: "Istanbul, Turkey",
        departure: "Paris, France",
        departureTime: "2024-11-01T08:45:00",
        returnTime: "2024-11-07T20:30:00",
        dressCode: "Comfortable Wear"
      },
      {
        id: "q1r2s3t4",
        name: "Barcelona Fiesta",
        price: 2299,
        duration: "7 days",
        description: "A city of art, architecture, and beaches",
        description2: "Marvel at Gaudi's creations, explore Gothic quarters, and relax by the Mediterranean.",
        image: "https://images6.alphacoders.com/561/561117.jpg",
        images: [
          "https://images.unsplash.com/photo-1562164763-dc5b33d99c75",
          "https://images.unsplash.com/photo-1590165691634-6eb9a6bcda84",
          "https://images.unsplash.com/photo-1571576020372-21d61e14e45e"
        ],
        destination: "Barcelona, Spain",
        departure: "Rome, Italy",
        departureTime: "2024-07-25T06:00:00",
        returnTime: "2024-07-31T18:00:00",
        dressCode: "Beach Casual"
      },
  {
    id: "u7v8w9x0",
    name: "Kyoto Serenity",
    price: 1999,
    duration: "5 days",
    description: "A journey through Japan's cultural heart",
    description2: "Experience Kyoto's tranquil temples, stunning gardens, and traditional tea ceremonies.",
    image: "https://w0.peakpx.com/wallpaper/425/25/HD-wallpaper-springtime-in-kyoto-sakura-japanese-spring-sky-japan-city-kyoto-shrine-temple-nature-scenery-fuji.jpg",
    images: [
      "https://images.unsplash.com/photo-1580530626195-99c72c771e36",
      "https://images.unsplash.com/photo-1533048220164-0e20657f6c8a",
      "https://images.unsplash.com/photo-1553835971-25a1f16d29d4"
    ],
    destination: "Kyoto, Japan",
    departure: "Tokyo, Japan",
    departureTime: "2024-09-20T09:00:00",
    returnTime: "2024-09-25T20:30:00",
    dressCode: "Comfortable Traditional"
  },
  {
    id: "y1z2a3b4",
    name: "Vancouver Escape",
    price: 2199,
    duration: "6 days",
    description: "Nature and urban adventure in Canada",
    description2: "Explore Vancouver's Stanley Park, Capilano Suspension Bridge, and vibrant city life.",
    image: "https://images8.alphacoders.com/399/399512.jpg",
    images: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "https://images.unsplash.com/photo-1572120360610-d971b9b8aedd",
      "https://images.unsplash.com/photo-1557443138-891c9e5f3296"
    ],
    destination: "Vancouver, Canada",
    departure: "Seattle, USA",
    departureTime: "2024-08-10T07:45:00",
    returnTime: "2024-08-16T19:00:00",
    dressCode: "Outdoor Casual"
  },
  {
    id: "c5d6e7f8",
    name: "Los Angeles Dreams",
    price: 2499,
    duration: "6 days",
    description: "Experience the glitz and glamour of LA",
    description2: "Visit Hollywood, Beverly Hills, Santa Monica, and Universal Studios in Los Angeles.",
    image: "https://images6.alphacoders.com/363/363303.jpg",
    images: [
      "https://images.unsplash.com/photo-1508919801845-fc2ae1bc8e8b",
      "https://images.unsplash.com/photo-1532511570535-1fd21ce4a127",
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2"
    ],
    destination: "Los Angeles, USA",
    departure: "New York City, USA",
    departureTime: "2024-07-15T06:00:00",
    returnTime: "2024-07-21T23:00:00",
    dressCode: "Trendy Wear"
  },
  {
    id: "g9h0i1j2",
    name: "Florence Art Tour",
    price: 2099,
    duration: "5 days",
    description: "Discover the Renaissance in Florence",
    description2: "Explore Florence's iconic landmarks like the Uffizi Gallery, Florence Cathedral, and Ponte Vecchio.",
    image: "https://images3.alphacoders.com/687/thumb-1920-687376.jpg",
    images: [
      "https://images.unsplash.com/photo-1575103274390-8e24a0d5f710",
      "https://images.unsplash.com/photo-1551884784-4bcd747d09d2",
      "https://images.unsplash.com/photo-1568254182559-3a4dff3a2f3c"
    ],
    destination: "Florence, Italy",
    departure: "Rome, Italy",
    departureTime: "2024-09-01T08:30:00",
    returnTime: "2024-09-06T20:00:00",
    dressCode: "Comfortable Casual"
  },
  {
    id: "k3l4m5n6",
    name: "Phuket Paradise",
    price: 1899,
    duration: "5 days",
    description: "Tropical getaway in Thailand",
    description2: "Relax on pristine beaches, enjoy vibrant nightlife, and explore island excursions in Phuket.",
    image: "https://a.cdn-hotels.com/gdcs/production62/d1691/1026b578-d86d-46f4-8ff4-cc4e9ae2ccbb.jpg",
    images: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "https://images.unsplash.com/photo-1558682123-8b709b14b869"
    ],
    destination: "Phuket, Thailand",
    departure: "Bangkok, Thailand",
    departureTime: "2024-07-25T09:00:00",
    returnTime: "2024-07-30T18:30:00",
    dressCode: "Beach Wear"
  },
  {
    id: "s5e6o7u8l9",
    name: "Seoul City Highlights",
    price: 1299,
    duration: "3 days",
    description: "Discover the heart of South Korea",
    description2: "Experience the vibrant city of Seoul by visiting Gyeongbokgung Palace, Bukchon Hanok Village, N Seoul Tower, and the bustling streets of Myeongdong for shopping and street food.",
    image: "https://i.ytimg.com/vi/Zvf60sr7HYA/maxresdefault.jpg",
    images: [
        "https://images.unsplash.com/photo-1578844021912-4e18a3cfd1a0",
        "https://images.unsplash.com/photo-1534326213578-c7d899132dd0",
        "https://images.unsplash.com/photo-1541560052-34f79d1f9f4d"
    ],
    destination: "Seoul, South Korea",
    departure: "Seoul, South Korea",
    departureTime: "2024-10-05T09:00:00",
    returnTime: "2024-10-08T21:00:00",
    dressCode: "Smart Casual"
}

    // Add similar structures for other tours
  ];
// Add similar structures for other tours
}
