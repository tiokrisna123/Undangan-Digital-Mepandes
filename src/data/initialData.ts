import { Profile, GalleryItem, Wish } from '../types';

export const PROFILES: Profile[] = [
  {
    id: 'putu',
    name: 'Putu',
    order: 'Anak Pertama',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
    bio: 'Putra Pertama dari Pasangan I Gede Suarta & Ni Kadek Ratni'
  },
  {
    id: 'made',
    name: 'Made',
    order: 'Anak Kedua',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600',
    bio: 'Putra Kedua dari Pasangan I Gede Suarta & Ni Kadek Ratni'
  },
  {
    id: 'nyoman',
    name: 'Nyoman',
    order: 'Anak Ketiga',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    bio: 'Putri Ketiga dari Pasangan I Gede Suarta & Ni Kadek Ratni'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    alt: 'Prosesi Persiapan Upacara',
    caption: 'Persiapan sarana upakara Manusa Yadnya'
  },
  {
    id: 'gal-2',
    src: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800',
    alt: 'Busana Adat Bali',
    caption: 'Agem busana adat payas agung'
  },
  {
    id: 'gal-3',
    src: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800',
    alt: 'Doa Suci Kesucian',
    caption: 'Pemujaan dan doa keselamatan keluarga'
  },
  {
    id: 'gal-4',
    src: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&q=80&w=800',
    alt: 'Ritual Mepandes',
    caption: 'Simbol pembersihan Sad Ripu dalam diri'
  }
];

export const INITIAL_WISHES: Wish[] = [
  {
    id: '1',
    name: 'I Made Wayan',
    attendance: 'hadir',
    guestCount: 2,
    message: 'Selamat menjalankan upacara Mepandes. Semoga prosesi berjalan lancar dan menjadi pribadi yang bijaksana.',
    timestamp: '2 jam yang lalu'
  },
  {
    id: '2',
    name: 'Ni Putu Ayu',
    attendance: 'hadir',
    guestCount: 1,
    message: 'Rahajeng nyanggra upacara Potong Gigi. Dumogi labda karya semeton sami.',
    timestamp: '4 jam yang lalu'
  },
  {
    id: '3',
    name: 'Gede Agus & Keluarga',
    attendance: 'hadir',
    guestCount: 3,
    message: 'Selamat dan sukses untuk seluruh rangkaian upacara Mepandes. Semoga Ida Sang Hyang Widhi Wasa senantiasa mengasihi.',
    timestamp: '1 hari yang lalu'
  }
];

