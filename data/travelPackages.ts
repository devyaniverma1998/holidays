// data/travelPackages.ts
export type Package = {
  name: string;
  price?: string;
  nights?: string;
  image: string;
};

/* Zenith Exclusive */
export const exclusive: Package[] = [
  { name: 'Kashmir Panorama', price: '33,990', image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400' },
  { name: 'Srinagar Escape', price: '25,990', image: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=400' },
  { name: 'Essence of Ladakh', price: '18,990', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400' },
  { name: 'Magic of Kenya with Tanzania', price: '290,990', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400' },
  { name: 'Best of Australia', price: '127,490', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400' },
  { name: 'Splendours of Japan', price: '124,990', image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=400' },
  { name: 'Discover Singapore', price: '56,990', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400' },
  { name: 'Dubai Diaries', price: '36,990', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400' },
];

/* Winter Delights */
export const winter: Package[] = [
  { name: 'European Timeless Treasures', price: '305,990', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400' },
  { name: 'European Delights', price: '269,990', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400' },
  { name: 'Flavours of Europe', price: '199,990', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400' },
  { name: 'Glimpse Of France', price: '138,490', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400' },
];

/* Elite Escapes */
export const elite: Package[] = [
  { name: 'South Africa - Luxury Calling', price: '731,240', image: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=400' },
  { name: 'Spain – Luxury Redefined', price: '1,290,990', image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=400' },
  { name: 'Mesmerizing New Zealand', price: '1,114,990', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400' },
];

/* Romantic Retreats */
export const romantic: Package[] = [
  { name: 'Mauritius Honeymoon', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400' },
  { name: 'Magical Maldives', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400' },
  { name: 'Highlights Of Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400' },
];

/* Divya Darshan */
export const spiritual: Package[] = [
  { name: 'Pilgrimage & Heritage: Kolkata to Gangasagr', price: '14,990', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400' },
  { name: 'Eastern Spiritual Trail', price: '24,990', image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=400' },
  { name: 'Spiritual Varanasi', price: '22,490', image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400' },
];

/* Crazy Deals */
export const budget: Package[] = [
  { name: 'Splendors of the East', nights: '7', price: '40,990', image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400' },
  { name: 'Andaman Serenity', nights: '4', price: '17,990', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
  { name: 'Goa Beach Bliss', nights: '3', price: '8,490', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400' },
];