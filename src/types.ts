export interface Wish {
  id: string;
  name: string;
  attendance: 'hadir' | 'tidak_hadir';
  guestCount?: number;
  message: string;
  timestamp: string;
}

export interface Profile {
  id: string;
  name: string;
  order: string;
  image: string;
  bio?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}
