import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit {
  message = 'Initial Message';
  tours = [
    {
      id: "o7p8q9r0",
      name: "Taj Mahal Splendor",
      price: 1499,
      duration: "3 days",
      description: "The Taj Mahal, located in Agra, is one of the most iconic structures in the world, built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. The monument is a symbol of eternal love and showcases intricate Mughal architecture, with its pristine white marble façade, stunning gardens, and reflective pools. A visit to the Taj Mahal at sunrise or sunset offers breathtaking views of the monument as the light changes its hue. Nearby, the Agra Fort, another UNESCO World Heritage site, provides a glimpse into the royal Mughal lifestyle with its massive gates, palaces, and courtyards. The bustling local markets are perfect for shopping handcrafted souvenirs, traditional garments, and local sweets like petha.",
      description2: "Visit the iconic Taj Mahal and explore Agra Fort and local markets for a cultural experience.",
      image: "http://wallsdesk.com/wp-content/uploads/2016/05/Taj-Mahal-Indian-Monument-Ultra-HD-Desktop-Wallpaper.jpg",
      images: [
        "https://images8.alphacoders.com/991/991715.jpg",
        "https://images.hdqwalls.com/download/taj-mahal-river-wide-3840x2160.jpg",
        "https://webneel.com/daily/sites/default/files/images/daily/04-2014/1-taj-mahal.jpg"
      ],
      destination: "Agra, India",
      departure: "Delhi, India",
      departureTime: "6:00:00",
      returnTime: "20:00:00",
      dressCode: "Traditional Ethnic"
    }, 
      {
        id: "a1b2c3d4",
        name: "Paris Gateway",
        price: 2499,
        duration: "5 days",
        description: "Paris is a dream destination for art, history, and romance. The Eiffel Tower, a global symbol of France, stands majestically over the city and offers panoramic views from its observation decks. The Louvre Museum houses world-famous masterpieces, including the Mona Lisa, while the Musée d'Orsay displays stunning Impressionist art. Wander the picturesque streets of Montmartre, home to the Sacré-Cœur Basilica, and explore the Notre-Dame Cathedral, a masterpiece of Gothic architecture. The Champs-Élysées, lined with shops, cafés, and theaters, leads to the Arc de Triomphe. Take a Seine River cruise to admire the bridges and illuminated landmarks of Paris. End your day with a French pastry or a meal in a classic bistro, savoring local delicacies like escargot, coq au vin, and crème brûlée.",
        description2: "Visit iconic landmarks like the Eiffel Tower, Louvre Museum, and enjoy the city's charming cafes.",
        image: "https://www.hdwallpapers.in/download/aerial_view_of_lighting_eiffel_tower_and_paris_city_during_sunset_4k_5k_hd_travel-3840x2160.jpg",
        images: [
          "https://hdqwalls.com/download/paris-france-eiffel-tower-night-m2-1920x1080.jpg",
          "https://wallpapercave.com/wp/wp6177562.jpg",
          "https://wallpaperaccess.com/full/316779.jpg"
        ],
        destination: "Paris, France",
        departure: "Los Angeles, USA",
        departureTime: "9:00:00",
        returnTime: "20:00:00",
        dressCode: "Casual"
      },
      {
        id: "e5f6g7h8",
        name: "Tokyo Adventure",
        price: 2799,
        duration: "7 days",
        description: "Tokyo blends futuristic technology with centuries-old traditions, offering something for every type of traveler. Start at the Senso-ji Temple in Asakusa, the oldest Buddhist temple in Tokyo, where you can walk through the bustling Nakamise Street lined with traditional shops selling souvenirs and street food. Explore the skyscraper district of Shinjuku, where you can visit observation decks for sweeping views of the city. In contrast, the serene Meiji Shrine offers a peaceful escape in the heart of Tokyo. Shibuya Crossing, one of the world’s busiest intersections, is a must-see, and the vibrant district of Akihabara is a haven for tech enthusiasts and anime lovers. Don’t forget to indulge in Japan’s world-renowned cuisine – from sushi and ramen to tempura and wagashi (traditional sweets).",
        description2: "Experience traditional temples, visit modern districts like Shibuya, and enjoy sushi and shopping.",
        image: "https://wallpaperaccess.com/full/19067.jpg",
        images: [
          "https://wallpapercave.com/wp/wp4118244.jpg",
          "https://images7.alphacoders.com/428/428387.jpg",
          "http://cdn.wallpapersafari.com/48/59/LEBVHk.jpg"
        ],
        destination: "Tokyo, Japan",
        departure: "San Francisco, USA",
        departureTime: "10:30:00",
        returnTime: "22:30:00",
        dressCode: "Smart Casual"
      },
      {
        id: "i9j0k1l2",
        name: "Rome Highlights",
        price: 2199,
        duration: "6 days",
        description: "Rome is a city where ancient history and modern life collide. Visit the Colosseum, an ancient arena that once hosted gladiatorial combat, and the Roman Forum, the political and social heart of ancient Rome. Just a short walk away, explore the Palatine Hill, where Rome was founded. In Vatican City, home to the Pope, you’ll find St. Peter’s Basilica and the Sistine Chapel, where Michelangelo’s iconic frescoes await. Wander through the Piazza Navona, a Baroque masterpiece, and toss a coin into the Trevi Fountain to ensure your return to Rome. Stroll the cobbled streets to taste authentic Italian pizza, pasta, and gelato. Make sure to explore the charming Trastevere neighborhood with its vibrant nightlife and charming streets.",
        description2: "Visit the Colosseum, Roman Forum, and Vatican City, and savor traditional Italian food.",
        image: "https://wallpapercave.com/wp/wp4737797.jpg",
        images: [
          "https://wallpaperaccess.com/full/1128080.jpg",
          "https://wallpaperaccess.com/full/115106.jpg",
          "https://images7.alphacoders.com/362/362746.jpg"
        ],
        destination: "Rome, Italy",
        departure: "New York City, USA",
        departureTime: "7:30:00",
        returnTime: "19:00:00",
        dressCode: "Casual"
      },
      {
        id: "m3n4o5p6",
        name: "New York City Vibes",
        price: 2999,
        duration: "5 days",
        description: "New York City is a city of infinite energy, diversity, and excitement. Begin with Times Square, the neon-lit center of entertainment, and then head to Central Park for a leisurely walk or bike ride. The Empire State Building offers incredible city views, and from the Top of the Rock observation deck at Rockefeller Center, you can see a panoramic skyline that includes the Statue of Liberty, Ellis Island, and the Brooklyn Bridge. At the 9/11 Memorial and Museum, pay tribute to the victims of the tragic events of September 11. Broadway shows are a must for theater lovers, and the Metropolitan Museum of Art showcases incredible collections, from Egyptian antiquities to European masterpieces. Explore diverse neighborhoods like Chinatown, SoHo, and Greenwich Village for unique shopping and culinary experiences.",
        description2: "See Times Square, Central Park, Broadway shows, and taste local delicacies.",
        image: "https://www.wallpaperflare.com/static/171/303/761/cityscape-new-york-city-sunset-new-wallpaper.jpg",
        images: [
          "https://images.hdqwalls.com/download/new-york-city-wide-8k-2z-5120x2880.jpg",
          "https://www.pixelstalk.net/wp-content/uploads/2016/05/New-york-city-wallpaper.jpg",
          "https://wallpapercave.com/wp/wp6504880.jpg"
        ],
        destination: "New York City, USA",
        departure: "London, UK",
        departureTime: "08:00:00",
        returnTime: "18:00:00",
        dressCode: "Smart Casual"
      },
      {
        id: "q7r8s9t0",
        name: "Sydney Escapade",
        price: 2399,
        duration: "6 days",
        description: "Sydney is known for its stunning natural beauty and dynamic urban culture. The Sydney Opera House, with its iconic sail-like design, is a must-see, and nearby, the Sydney Harbour Bridge offers panoramic views of the city and harbor. Take a ferry ride to Taronga Zoo, home to Australia’s unique wildlife, or spend a day relaxing on Bondi Beach or Manly Beach. Stroll through the Royal Botanic Garden, with its sweeping views of the harbor, and visit The Rocks for its historical significance and artisanal markets. The art and culture scene is vibrant, with galleries like the Art Gallery of New South Wales, and you can explore Aboriginal heritage and art at the Australian Museum. Sydney’s thriving food scene offers everything from fresh seafood to multicultural dishes.",
        description2: "See the Sydney Opera House, Bondi Beach, and explore local markets and restaurants.",
        image: "https://images7.alphacoders.com/716/thumb-1920-716104.jpg",
        images: [
          "https://wallpaperaccess.com/full/1564397.jpg",
          "https://images5.alphacoders.com/446/446818.jpg",
          "https://wallpapercave.com/wp/wp2684752.jpg"
        ],
        destination: "Sydney, Australia",
        departure: "London, UK",
        departureTime: "09:00:00",
        returnTime: "22:00:00",
        dressCode: "Casual"
      },
    {
      id: 'q7r8s9t0',
      name: 'Bali Getaway',
      price: 1799,
      duration: '6 days',
      description: 'Bali is a paradise known for its stunning beaches, lush landscapes, and rich cultural heritage. Visit Ubud, the cultural heart of Bali, and explore its terraced rice paddies, ancient temples like Goa Gajah, and traditional Balinese art. The cliff-side Uluwatu Temple, with breathtaking views of the Indian Ocean, is one of Bali’s most famous landmarks. Bali is also a haven for beach lovers, with places like Nusa Dua and Seminyak offering pristine shores and waters perfect for swimming, surfing, and diving. Discover the island’s spiritual side by attending a traditional Balinese ceremony or exploring the ancient Tirta Empul temple known for its holy spring water. Bali’s wellness retreats provide yoga, meditation, and rejuvenating spa treatments, offering visitors a complete relaxation experience.',
      description2: 'Enjoy Bali lush landscapes, tranquil beaches, and vibrant culture, perfect for relaxation or adventure.',
      image: 'https://www.hdwallpapers.in/download/temple_in_water_with_reflection_bali_indonesia_pura_ulun_danu_bratan_during_sunset_hd_travel-HD.jpg',
      images: [
        'https://wallpaperaccess.com/full/373636.jpg',
        'https://wallpaperaccess.com/full/1937832.jpg',
        'https://wallpaperaccess.com/full/21980.jpg'
      ],
      destination: 'Sydney, Australia',
      departure: 'San Francisco, USA',
      departureTime: '06:30:00',
      returnTime: '23:30:00',
      dressCode: 'Beach Wear'
    },
    {
      id: 'q7r8s9t0',
      name: 'London Discovery',
      price: 2199,
      duration: '6 days',
      description: 'London is a city steeped in history and brimming with iconic landmarks. Visit the Tower of London to learn about its role as a royal palace and prison, and marvel at the Crown Jewels. Buckingham Palace, the official residence of the monarch, offers a glimpse into the royal life, especially during the Changing of the Guard ceremony. Explore Westminster Abbey, where British monarchs are crowned, and take a ride on the London Eye for panoramic views of the city. Trafalgar Square, with its Nelson’s Column, and Covent Garden, known for street performances, are perfect for leisurely explorations. The British Museum and Tate Modern house world-class art collections, while shopping on Oxford Street is a must for fashion enthusiasts.',
      description2: 'Discover London iconic landmarks like the Tower of London, Buckingham Palace, and the British Museum, blending history and modernity.',
      image: 'https://wallpaperaccess.com/full/466325.jpg',
      images: [
        'https://cdn.wallpapersafari.com/78/28/rdkgDG.jpg',
        'http://www.technocrazed.com/wp-content/uploads/2015/12/London-wallpaper-8.jpg',
        'https://wallpapers-all.com/uploads/posts/2016-11/15_london.jpg'
      ],
      destination: 'Sydney, Australia',
      departure: 'San Francisco, USA',
      departureTime: '06:30:00',
      returnTime: '23:30:00',
      dressCode: 'Beach Wear'
    },
    {
      id: 'q7r8s9t0',
      name: 'Dubai Adventure',
      price: 2199,
      duration: '6 days',
      description: 'Dubai is a city of luxury, innovation, and dramatic contrasts. Visit the Burj Khalifa, the tallest building in the world, for breathtaking views of the skyline and desert. Explore the Dubai Mall, home to over 1,200 stores, an indoor aquarium, and an ice rink. For a taste of traditional Dubai, head to the Al Fahidi Historic District, where narrow alleyways lead you to art galleries, cafes, and the Dubai Museum. Take a desert safari, with dune bashing, camel rides, and a traditional Bedouin camp experience. The Palm Jumeirah, an artificial archipelago, is home to luxury resorts like Atlantis, The Palm, while the Dubai Marina offers an upscale waterfront dining experience.',
      description2: 'Explore Dubai stunning architecture, world-class shopping, and exciting attractions like the Burj Khalifa and Desert Safari.',
      image: 'https://wallpaperaccess.com/full/222685.jpg',
      images: [
        'https://wallpaperaccess.com/full/222689.jpg',
        'https://wallpapers.com/images/hd/exceptional-dubai-z03qow0d0d3yuumg.jpg',
        'https://wallpapercave.com/wp/wp1809591.jpg'
      ],
      destination: 'Sydney, Australia',
      departure: 'San Francisco, USA',
      departureTime: '06:30:00',
      returnTime: '23:30:00',
      dressCode: 'Beach Wear'
    },
    {
      id: 'q7r8s9t0',
      name: 'Amsterdam Vibes',
      price: 2199,
      duration: '6 days',
      description: 'Amsterdam, with its historic canals and vibrant culture, is a city best explored by bike or boat. Take a canal cruise and admire the city’s 17th-century Golden Age architecture, passing by charming houseboats and bridges. Visit the Rijksmuseum to see Dutch masterpieces by Rembrandt and Vermeer, or head to the Van Gogh Museum for the world’s largest collection of the artist’s works. Wander the Jordaan district, filled with boutique shops, art galleries, and trendy cafés. The Anne Frank House offers a moving and educational experience about World War II. In spring, the tulip fields around Amsterdam come to life, creating a colorful spectacle that attracts visitors worldwide.',
      description2: 'Take a canal cruise through Amsterdam, visit the Anne Frank House, and enjoy the city art museums and vibrant nightlife.',
      image: 'http://www.pixelstalk.net/wp-content/uploads/2016/10/Amsterdam-Wallpaper-HD.jpg',
      images: [
        'https://wallup.net/wp-content/uploads/2017/11/22/320199-boat-building-Amsterdam.jpg',
        'https://www.hdwallpapers.in/download/canal_netherlands_amsterdam_city_hd_city-1920x1080.jpg',
        'https://wallpaperaccess.com/full/2827328.jpg'
      ],
      destination: 'Sydney, Australia',
      departure: 'San Francisco, USA',
      departureTime: '06:30:00',
      returnTime: '23:30:00',
      dressCode: 'Beach Wear'
    },

  
      {
        id: "a1b2c3d4",
        name: "Maldives Retreat",
        price: 2499,
        duration: "7 days",
        description: "The Maldives, a tropical paradise in the Indian Ocean, is renowned for its stunning overwater bungalows, crystal-clear waters, and vibrant coral reefs. It is made up of over 1,000 islands, each offering white-sand beaches and turquoise lagoons perfect for swimming, snorkeling, and diving. The Maldives is ideal for romantic getaways, luxury resorts, and spa retreats. Explore the underwater world through vibrant coral gardens, home to manta rays, sea turtles, and tropical fish. Enjoy private beach dinners under the stars or relax with a cocktail in hand while watching the sunset. Visit local islands to experience Maldivian culture, including fishing traditions and local crafts. The Maldives is a world-class destination for relaxation, adventure, and unique experiences like underwater dining and the opportunity to stay in private villas surrounded by nature.",
        description2: "Enjoy turquoise waters, white sandy beaches, and luxury overwater villas in the Maldives.",
        image: "https://images.hdqwalls.com/download/maldives-resorts-huts-over-water-22-1920x1080.jpg",
        images: [
          "https://wallpapercave.com/wp/wp4483174.jpg",
          "https://wallpapercave.com/wp/wp8742429.jpg",
          "https://wallpaperaccess.com/full/2810898.jpg"
        ],
        destination: "Malé, Maldives",
        departure: "London, UK",
        departureTime: "10:00:00",
        returnTime: "22:00:00",
        dressCode: "Resort Wear"
      },
      {
        id: "e5f6g7h8",
        name: "Bangkok Delight",
        price: 1799,
        duration: "5 days",
        description: "Bangkok, Thailand’s vibrant capital, is a dynamic fusion of ancient temples, modern skyscrapers, and bustling street markets. Visit the Grand Palace, home to the Emerald Buddha, and explore the beautiful Wat Pho with its reclining Buddha. Discover the charm of the floating markets, where vendors sell fresh fruits, flowers, and local goods from boats. Take a boat ride along the Chao Phraya River to reach historical landmarks like Wat Arun (Temple of Dawn). The city is also famous for its lively shopping districts, from the Chatuchak weekend market to the high-end malls of Sukhumvit. At night, Bangkok comes alive with street food vendors offering dishes like pad Thai, green curry, and mango sticky rice. The city’s nightlife ranges from rooftop bars with stunning views to the vibrant scene on Khao San Road.",
        description2: "Explore the Grand Palace, floating markets, and delicious street food in Thailand's capital.",
        image: "https://wallpaperaccess.com/full/1375413.jpg",
        images: [
          "https://images7.alphacoders.com/426/426992.jpg",
          "https://wallpapercave.com/wp/wp1916890.jpg",
          "https://images.wallpapersden.com/image/download/thailand-bangkok-capital_ZmxlZmiUmZqaraWkpJRmbmtlrWZna2o.jpg"
        ],
        destination: "Bangkok, Thailand",
        departure: "New York City, USA",
        departureTime: "07:30:00",
        returnTime: "20:30:00",
        dressCode: "Casual Wear"
      },
      {
        id: "i9j0k1l2",
        name: "Singapore Splendor",
        price: 2199,
        duration: "6 days",
        description: "Singapore is a unique blend of modernity, nature, and multicultural influences. The city is home to futuristic architecture, like the Marina Bay Sands and the Gardens by the Bay, with its iconic Supertree Grove and cloud forest. Singapore’s skyline is matched only by its lush green spaces, such as the Singapore Botanic Gardens, a UNESCO World Heritage site. Visit Chinatown for traditional markets and delicious food, or explore Little India for its vibrant culture and color. The city is known for its impeccable cleanliness, excellent public transportation system, and delicious food, with dishes like chili crab, laksa, and Hainanese chicken rice. For an unforgettable shopping experience, head to Orchard Road, lined with luxury stores and local boutiques. Singapore is a city of contrasts, where traditional temples coexist with cutting-edge technology.",
        description2: "Visit Marina Bay Sands, Gardens by the Bay, and enjoy diverse cuisines in Singapore.",
        image: "https://wallpapercave.com/wp/wp2112995.jpg",
        images: [
          "https://wonderfulengineering.com/wp-content/uploads/2016/01/singapore-wallpaper-35.jpg",
          "https://wallpapercave.com/wp/wp2113121.jpg",
          "https://wallpaperaccess.com/full/1618439.jpg"
        ],
        destination: "Singapore",
        departure: "Sydney, Australia",
        departureTime: "09:00:00",
        returnTime: "23:59:00",
        dressCode: "Smart Casual"
      },
      {
        id: "m3n4o5p6",
        name: "Istanbul Odyssey",
        price: 1999,
        duration: "6 days",
        description: "Istanbul, the only city that spans two continents, offers an incredible mix of ancient history, vibrant culture, and stunning architecture. The city’s rich history is visible in landmarks like the Hagia Sophia, a former church turned mosque and now a museum, and the Blue Mosque, with its breathtaking blue-tiled interior. The Topkapi Palace, once the seat of the Ottoman Empire, is another must-see, showcasing opulent rooms and priceless artifacts. Stroll through the Grand Bazaar, one of the world’s largest covered markets, and haggle for spices, textiles, and jewelry. Enjoy a Bosphorus cruise, which offers a unique perspective of the city’s skyline. Istanbul also offers incredible culinary experiences, with Turkish delights, baklava, and the famous Turkish coffee. The city’s nightlife is buzzing with bars, clubs, and traditional Turkish taverns (meyhane).",
        description2: "Discover the Hagia Sophia, Blue Mosque, and the bustling Grand Bazaar in Istanbul.",
        image: "https://images.alphacoders.com/533/533992.jpg",
        images: [
          "https://wallpapercave.com/wp/wp1813727.jpg",
          "https://tse1.mm.bing.net/th?id=OIP.ftmDBAvRHyiAWCaq0R5EHgHaE8&pid=Api&P=0&h=180",
          "http://wallpapercave.com/wp/wp1813796.jpg"
        ],
        destination: "Istanbul, Turkey",
        departure: "Paris, France",
        departureTime: "08:45:00",
        returnTime: "20:30:00",
        dressCode: "Comfortable Wear"
      },
      {
        id: "q1r2s3t4",
        name: "Barcelona Fiesta",
        price: 2299,
        duration: "7 days",
        description: "Barcelona is a vibrant city known for its unique architecture, Mediterranean beaches, and rich Catalan culture. Start by visiting Antoni Gaudí’s masterpieces, including the Sagrada Família, a basilica that has been under construction for over 100 years, and Park Güell, with its whimsical mosaics and sweeping views of the city. The historic Gothic Quarter is full of narrow alleys, trendy boutiques, and tapas bars. Stroll down La Rambla, a tree-lined street filled with shops, cafés, and street performers. Barcelona’s beaches, such as Barceloneta, are perfect for a relaxing day in the sun. Don’t miss a visit to the Picasso Museum and the vibrant Mercado de La Boqueria, where you can sample fresh produce and local specialties. Barcelona’s food scene, especially its seafood and tapas, is unmatched in Europe.",
        description2: "Marvel at Gaudi's creations, explore Gothic quarters, and relax by the Mediterranean.",
        image: "https://images6.alphacoders.com/561/561117.jpg",
        images: [
          "http://getwallpapers.com/wallpaper/full/5/b/5/1087960-beautiful-barcelona-city-wallpapers-3840x2160-for-retina.jpg",
          "https://wallpaperaccess.com/full/450524.jpg",
          "http://getwallpapers.com/wallpaper/full/2/c/1/1088406-download-barcelona-city-wallpapers-1920x1200-pc.jpg"
        ],
        destination: "Barcelona, Spain",
        departure: "Rome, Italy",
        departureTime: "06:00:00",
        returnTime: "18:00:00",
        dressCode: "Beach Casual"
      },
  {
    id: "u7v8w9x0",
    name: "Kyoto Serenity",
    price: 1999,
    duration: "5 days",
    description: "Kyoto, once the capital of Japan, is the heart of traditional Japanese culture. Known for its temples, shrines, and natural beauty, Kyoto is home to over 2,000 religious sites, including Kinkaku-ji (the Golden Pavilion), a stunning Zen Buddhist temple covered in gold leaf. Fushimi Inari Taisha, with its thousands of red torii gates, is another iconic destination. Kyoto’s Arashiyama district offers scenic beauty, with bamboo forests and the Togetsukyo Bridge overlooking the Katsura River. The city’s Gion district, where geishas still practice their traditional arts, offers a glimpse into Kyoto’s past. Kyoto is also famous for its tea ceremonies, authentic kaiseki dining (traditional multi-course meal), and serene gardens, making it a perfect destination for those seeking cultural immersion and tranquility.",
    description2: "Experience Kyoto's tranquil temples, stunning gardens, and traditional tea ceremonies.",
    image: "https://w0.peakpx.com/wallpaper/425/25/HD-wallpaper-springtime-in-kyoto-sakura-japanese-spring-sky-japan-city-kyoto-shrine-temple-nature-scenery-fuji.jpg",
    images: [
      "https://wallpapercave.com/wp/wp5268141.jpg",
      "https://wallpaperaccess.com/full/276590.jpg",
      "https://a.cdn-hotels.com/gdcs/production75/d1996/701c9957-d6f1-45ae-a18d-e9fe7fc319ee.jpg"
    ],
    destination: "Kyoto, Japan",
    departure: "Tokyo, Japan",
    departureTime: "09:00:00",
    returnTime: "20:30:00",
    dressCode: "Comfortable Traditional"
  },
  {
    id: "y1z2a3b4",
    name: "Vancouver Escape",
    price: 2199,
    duration: "6 days",
    description: "Vancouver is a dynamic city known for its stunning natural surroundings and thriving arts scene. Located between the Pacific Ocean and the Coast Mountains, Vancouver offers a wealth of outdoor activities. Stanley Park, one of North America’s largest urban parks, is perfect for biking, walking, or simply enjoying the views. Nearby, Grouse Mountain offers hiking in the summer and skiing in the winter. Vancouver is also known for its multicultural vibe, with neighborhoods like Chinatown, Granville Island, and the Seawall offering a variety of experiences. Visit the Vancouver Aquarium for marine life, explore the Museum of Anthropology for Indigenous art, or take a ferry to nearby Vancouver Island. The city’s food scene is diverse, with excellent seafood, Asian cuisine, and innovative modern dishes.",
    description2: "Explore Vancouver's Stanley Park, Capilano Suspension Bridge, and vibrant city life.",
    image: "https://images8.alphacoders.com/399/399512.jpg",
    images: [
      "https://wallpaperaccess.com/full/4313143.jpg",
      "https://wallpaper.dog/large/20387507.jpg",
      "https://wallpapercave.com/wp/wp4183807.jpg"
    ],
    destination: "Vancouver, Canada",
    departure: "Seattle, USA",
    departureTime: "07:45:00",
    returnTime: "19:00:00",
    dressCode: "Outdoor Casual"
  },
  {
    id: "c5d6e7f8",
    name: "Los Angeles Dreams",
    price: 2499,
    duration: "6 days",
    description: "Los Angeles is a sprawling metropolis filled with iconic landmarks and entertainment. Visit Hollywood to see the Walk of Fame and the TCL Chinese Theatre, or take a studio tour to get a behind-the-scenes look at how movies and TV shows are made. The Getty Center and Los Angeles County Museum of Art (LACMA) are two must-see art museums, showcasing both classical and contemporary works. For outdoor enthusiasts, hiking to the Griffith Observatory provides breathtaking views of the city and the Hollywood Sign. Los Angeles is also home to some of the world’s best shopping, dining, and nightlife, from the high-end boutiques of Rodeo Drive to the vibrant nightlife of Downtown LA and Santa Monica.",
    description2: "Visit Hollywood, Beverly Hills, Santa Monica, and Universal Studios in Los Angeles.",
    image: "https://images6.alphacoders.com/363/363303.jpg",
    images: [
      "https://wallpaperbat.com/img/218978-sunny-day-in-los-angeles-hd-wallpaper-cities-in-the-world.jpg",
      "https://images.wallpapersden.com/image/download/los-angeles-panorama_bGZpaWiUmZqaraWkpJRmbmdlrWZlbWU.jpg",
      "http://getwallpapers.com/wallpaper/full/b/5/5/149822.jpg"
    ],
    destination: "Los Angeles, USA",
    departure: "New York City, USA",
    departureTime: "06:00:00",
    returnTime: "23:00:00",
    dressCode: "Trendy Wear"
  },
  {
    id: "g9h0i1j2",
    name: "Florence Art Tour",
    price: 2099,
    duration: "5 days",
    description: "Florence, the birthplace of the Renaissance, is a city of art, history, and architectural splendor. Visit the Uffizi Gallery to see masterpieces by Botticelli and Leonardo da Vinci, and admire Michelangelo’s David at the Accademia Gallery. Florence’s Duomo, with its stunning dome designed by Brunelleschi, is one of the most impressive buildings in Italy. Wander through the historic center, with its cobbled streets and piazzas, including the famous Piazza della Signoria. Cross the Ponte Vecchio, a medieval bridge lined with jewelry shops, and visit the Boboli Gardens for a peaceful retreat. Florence is also known for its Tuscan cuisine, including pasta, wines, and olive oil, making it a perfect destination for food lovers.",
    description2: "Explore Florence's iconic landmarks like the Uffizi Gallery, Florence Cathedral, and Ponte Vecchio.",
    image: "https://images3.alphacoders.com/687/thumb-1920-687376.jpg",
    images: [
      "http://www.baltana.com/files/wallpapers-1/Florence-HD-Wallpapers-02033.jpg",
      "http://1.bp.blogspot.com/-dTZtkvTLrpM/UMxg0yUS7lI/AAAAAAAAIwo/XyKKtuzDE1A/s1600/Florence_Ponte_Vecchio_Beautiful_Italian_Old_Bridge_Arno_River_Italy_Hd_Desktop_Wallpaper_citiesoflove.blogspot.com.jpg",
      "https://w0.peakpx.com/wallpaper/479/958/HD-wallpaper-florence-italy-tuscany-florence-bridge-italy.jpg"
    ],
    destination: "Florence, Italy",
    departure: "Rome, Italy",
    departureTime: "08:30:00",
    returnTime: "20:00:00",
    dressCode: "Comfortable Casual"
  },
  {
    id: "k3l4m5n6",
    name: "Phuket Paradise",
    price: 1899,
    duration: "5 days",
    description: "Phuket, Thailand’s largest island, is famous for its pristine beaches, lively nightlife, and lush jungles. Patong Beach, with its bustling atmosphere, is ideal for those seeking water sports and vibrant nightlife. For a more serene experience, visit Kata or Karon Beach for peaceful relaxation. Phuket is a gateway for exploring nearby islands like Phi Phi Islands and Phang Nga Bay, famous for their dramatic limestone cliffs and clear waters. Visit the Big Buddha statue for panoramic views of the island, or explore the Old Phuket Town, known for its colorful Sino-Portuguese architecture. The island offers a rich cultural heritage with temples, markets, and local festivals, alongside opportunities for adventure, from snorkeling to zip-lining.",
    description2: "Relax on pristine beaches, enjoy vibrant nightlife, and explore island excursions in Phuket.",
    image: "https://a.cdn-hotels.com/gdcs/production62/d1691/1026b578-d86d-46f4-8ff4-cc4e9ae2ccbb.jpg",
    images: [
      "https://images4.alphacoders.com/736/736261.jpg",
      "https://wallpapercave.com/wp/wp2822516.jpg",
      "https://wallpapercave.com/wp/wp4189713.jpg"
    ],
    destination: "Phuket, Thailand",
    departure: "Bangkok, Thailand",
    departureTime: "09:00:00",
    returnTime: "18:30:00",
    dressCode: "Beach Wear"
  },
  {
    id: "s5e6o7u8l9",
    name: "Seoul City Highlights",
    price: 1299,
    duration: "3 days",
    description: "Seoul, South Korea’s bustling capital, is a dynamic blend of modern technology and traditional culture. Visit Gyeongbokgung Palace, the largest of Seoul’s five grand palaces, and the Bukchon Hanok Village, where traditional Korean homes (hanok) stand alongside modern architecture. The vibrant neighborhoods of Myeongdong and Insadong are famous for shopping, street food, and cultural experiences. Explore the N Seoul Tower for panoramic city views, or relax in the peaceful environment of the Changdeokgung Palace and its Secret Garden. Gangnam, famous for its high-end shopping and nightlife, offers a modern contrast to the traditional areas of the city. Korean cuisine is a major highlight, with dishes like bibimbap, kimchi, and Korean BBQ offering an authentic taste of the country’s culinary culture.",
    description2: "Experience the vibrant city of Seoul by visiting Gyeongbokgung Palace, Bukchon Hanok Village, N Seoul Tower, and the bustling streets of Myeongdong for shopping and street food.",
    image: "https://i.ytimg.com/vi/Zvf60sr7HYA/maxresdefault.jpg",
    images: [
        "https://wallpaperaccess.com/full/1522964.jpg",
        "https://wallpaperaccess.com/full/101533.jpg",
        "https://wallup.net/wp-content/uploads/2019/09/258581-korea-seoul-south-korea.jpg"
    ],
    destination: "Seoul, South Korea",
    departure: "Seoul, South Korea",
    departureTime: "09:00:00",
    returnTime: "21:00:00",
    dressCode: "Smart Casual"
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
  protected tourId: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const tourId = params.get('id');
      this.route.params.subscribe(params => {
        this.tourId = params['id'];
      });
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
