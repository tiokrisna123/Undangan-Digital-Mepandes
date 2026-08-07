import { Profile, GalleryItem, Wish } from '../types';

export const PROFILES: Profile[] = [
  {
    id: 'Dayu Tirta',
    name: 'Ida Ayu Tirta Maheswari Pidada',
    order: 'Putri Kedua dari Pasangan',
    image: "/assets/FOTO DETE SENDIRI.webp",
    bio: 'Ida Bagus Ketut Oka Suteja & Virra Silvana'
  },
  {
    id: 'Dayu Ami ',
    name: 'Ida Ayu Panondria Laksmidewi Pidada',
    order: 'Putri Pertama dari Pasangan',
    image: "/assets/FOTO DAMI SENDIRI.webp",
    bio: 'Ida Bagus Gede Putra Manuaba & Ida Ayu Widnyani Pidada'
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    src: "/assets/FOTO OUR GALLERY.webp",
    alt: 'Prosesi Persiapan Upacara',
    caption: 'Ida Ayu Tirta Maheswari Pidada'
  },
  {
    id: 'gal-2',
    src: "/assets/FOTO OUR GALLERY (1).webp",
    alt: 'Busana Adat Bali',
    caption: 'Ida Ayu Tirta Maheswari Pidada'
  },
  {
    id: 'gal-3',
    src: "/assets/FOTO OUR GALLERY (2).webp",
    alt: 'Doa Suci Kesucian',
    caption: 'Ida Ayu Tirta Maheswari Pidada'
  },
  {
    id: 'gal-4',
    src: "/assets/FOTO OUR GALLERY (3).webp",
    alt: 'Ritual Mepandes',
    caption: 'Ida Ayu Tirta Maheswari Pidada'
  },
  {
    id: 'gal-5',
    src: "/assets/FOTO OUR GALLERY (4).webp",
    alt: 'Ritual Mepandes',
    caption: 'Ida Ayu Panondria Laksmidewi Pidada'
  },
  {
    id: 'gal-6',
    src: "/assets/FOTO OUR GALLERY (7).webp",
    alt: 'Ritual Mepandes',
    caption: 'Ida Ayu Panondria Laksmidewi Pidada'
  },
  {
    id: 'gal-7',
    src: "/assets/FOTO OUR GALLERY (5).webp",
    alt: 'Ritual Mepandes',
    caption: 'Ida Ayu Panondria Laksmidewi Pidada'
  },
  {
    id: 'gal-8',
    src: "/assets/FOTO OUR GALLERY (6).webp",
    alt: 'Ritual Mepandes',
    caption: 'Ida Ayu Panondria Laksmidewi Pidada'
  },
  {
    id: 'gal-9',
    src: "/assets/FOTO OUR GALLERY (8).webp",
    alt: 'Ritual Mepandes',
    caption: 'Simbol pembersihan Sad Ripu dalam diri'
  },
  {
    id: 'gal-10',
    src: "/assets/FOTO OUR GALLERY (9).webp",
    alt: 'Ritual Mepandes',
    caption: 'Simbol pembersihan Sad Ripu dalam diri'
  },
  {
    id: 'gal-11',
    src: "/assets/FOTO OUR GALLERY (10).webp",
    alt: 'Ritual Mepandes',
    caption: 'Simbol pembersihan Sad Ripu dalam diri'
  },
  {
    id: 'gal-12',
    src: "/assets/FOTO OUR GALLERY (11).webp",
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

