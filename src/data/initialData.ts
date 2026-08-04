import { Profile, GalleryItem, Wish } from '../types';

export const PROFILES: Profile[] = [
  {
    id: 'Dayu Tirta',
    name: 'Ida Ayu Tirta Maheswari Pidada',
    order: 'Anak Kedua',
    image: "/assets/FOTO DETE SENDIRI.jpg",
    bio: 'Putri Kedua dari Pasangan Ida Bagus Ketut Oka Suteja & Virra Silvana '
  },
  {
    id: 'Dayu Ami ',
    name: 'Ida Ayu Panondria Laksmidewi Pidada',
    order: 'Anak Pertama',
    image: "/assets/FOTO DAMI SENDIRI.jpeg",
    bio: 'Putri Pertama dari Pasangan Ida Bagus Gede Putra Manuaba & Ida Ayu Widnyani Pidada'
  },
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

