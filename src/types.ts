export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface RoomInfo {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  view: string;
  occupancy: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  timeAgo: string;
  tag: string;
  rating: number;
  highlight: string;
  comment: string;
  imageSnippet?: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'all' | 'rooms' | 'exterior' | 'dining' | 'lounge' | 'views';
  src: string;
  description: string;
  featured?: boolean;
}

export interface DiningFeature {
  title: string;
  description: string;
  icon: string;
}

export interface BookingFormData {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
  name: string;
  phone: string;
  specialRequests: string;
}
