export interface Wedding {
  id: string;
  title: string;
  couple: string;
  date: string;
  location: string;
  coverImage: string;
  images: string[];
  description: string;
}

export const weddings: Wedding[] = [
  {
    id: '1',
    title: 'Garden Romance',
    couple: 'Sarah & Michael',
    date: 'June 15, 2024',
    location: 'Riverside Garden Estate',
    coverImage: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1167377/pexels-photo-1167377.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2174602/pexels-photo-2174602.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    description: 'A magical garden ceremony surrounded by blooming flowers and natural beauty.',
  },
  {
    id: '2',
    title: 'Beach Sunset',
    couple: 'Emily & James',
    date: 'August 22, 2024',
    location: 'Sunset Beach Resort',
    coverImage: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/265705/pexels-photo-265705.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    description: 'An intimate beachside celebration with stunning ocean views and golden hour magic.',
  },
  {
    id: '3',
    title: 'Elegant Ballroom',
    couple: 'Olivia & David',
    date: 'September 10, 2024',
    location: 'Grand Crystal Ballroom',
    coverImage: 'https://images.pexels.com/photos/2072179/pexels-photo-2072179.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2072179/pexels-photo-2072179.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2183773/pexels-photo-2183773.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2127038/pexels-photo-2127038.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    description: 'A luxurious ballroom affair with crystal chandeliers and timeless elegance.',
  },
  {
    id: '4',
    title: 'Rustic Barn',
    couple: 'Sophia & Alex',
    date: 'October 5, 2024',
    location: 'Meadow View Barn',
    coverImage: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2306212/pexels-photo-2306212.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    description: 'A charming countryside wedding with rustic details and warm, cozy ambiance.',
  },
  {
    id: '5',
    title: 'Mountain Vista',
    couple: 'Isabella & Ryan',
    date: 'July 18, 2024',
    location: 'Highland Peak Lodge',
    coverImage: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    description: 'A breathtaking mountain ceremony with panoramic views and alpine charm.',
  },
  {
    id: '6',
    title: 'City Chic',
    couple: 'Ava & Nathan',
    date: 'November 12, 2024',
    location: 'Metropolitan Rooftop',
    coverImage: 'https://images.pexels.com/photos/2174602/pexels-photo-2174602.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2174602/pexels-photo-2174602.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2072179/pexels-photo-2072179.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    description: 'A modern urban celebration with skyline views and contemporary elegance.',
  },
];

export const services = [
  {
    icon: 'Camera',
    title: 'Wedding Photography',
    description: 'Capturing every precious moment with artistic vision and professional expertise.',
  },
  {
    icon: 'Video',
    title: 'Cinematic Videography',
    description: 'Creating stunning wedding films that tell your unique love story.',
  },
  {
    icon: 'Users',
    title: 'Pre-Wedding Shoots',
    description: 'Beautiful engagement and pre-wedding photography sessions at stunning locations.',
  },
  {
    icon: 'Sparkles',
    title: 'Event Planning',
    description: 'Complete event coordination to ensure your special day flows perfectly.',
  },
  {
    icon: 'Image',
    title: 'Photo & Video Editing',
    description: 'Professional post-production to enhance and perfect your memories.',
  },
  {
    icon: 'Heart',
    title: 'Custom Packages',
    description: 'Tailored packages designed to meet your specific needs and budget.',
  },
];

export const testimonials = [
  {
    name: 'Sarah & Michael',
    wedding: 'Garden Romance',
    text: 'Kaizen Production exceeded all our expectations! They captured every moment beautifully and made us feel so comfortable throughout the day. The photos are absolutely stunning!',
    rating: 5,
  },
  {
    name: 'Emily & James',
    wedding: 'Beach Sunset',
    text: 'We are so grateful we chose Kaizen Production for our beach wedding. The team was professional, creative, and captured the magic of our special day perfectly. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Olivia & David',
    wedding: 'Elegant Ballroom',
    text: 'From start to finish, Kaizen Production was amazing! They understood our vision and delivered photos that were even better than we imagined. True professionals!',
    rating: 5,
  },
  {
    name: 'Sophia & Alex',
    wedding: 'Rustic Barn',
    text: 'The attention to detail and artistic eye of Kaizen Production is unmatched. They captured our rustic wedding perfectly and created memories we will cherish forever!',
    rating: 5,
  },
];
