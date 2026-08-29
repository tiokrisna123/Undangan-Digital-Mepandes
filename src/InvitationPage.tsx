import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { WelcomeCover } from './components/WelcomeCover';
import { HeroSection } from './components/HeroSection';
import { QuoteSection } from './components/QuoteSection';
import { ProfileSection } from './components/ProfileSection';
import { GallerySection } from './components/GallerySection';
import { EventInfoSection } from './components/EventInfoSection';
import { RsvpSection } from './components/RsvpSection';
import { MapSection } from './components/MapSection';
import { AudioPlayer } from './components/AudioPlayer';
import { LightboxModal } from './components/LightboxModal';
import { LinkGeneratorModal } from './components/LinkGeneratorModal';
import { Footer } from './components/Footer';
import { supabase } from "./lib/supabase";
import DigitalGiftSection from "./components/DigitalGiftSection";

import { WelcomeCover as DeyaWelcomeCover } from './components/deya/WelcomeCover';
import { HeroSection as DeyaHeroSection } from './components/deya/HeroSection';
import { QuoteSection as DeyaQuoteSection } from './components/deya/QuoteSection';
import { ProfileSection as DeyaProfileSection } from './components/deya/ProfileSection';
import { GallerySection as DeyaGallerySection } from './components/deya/GallerySection';
import { EventInfoSection as DeyaEventInfoSection } from './components/deya/EventInfoSection';
import { RsvpSection as DeyaRsvpSection } from './components/deya/RsvpSection';
import { MapSection as DeyaMapSection } from './components/deya/MapSection';
import { AudioPlayer as DeyaAudioPlayer } from './components/deya/AudioPlayer';
import { LightboxModal as DeyaLightboxModal } from './components/deya/LightboxModal';
import { LinkGeneratorModal as DeyaLinkGeneratorModal } from './components/deya/LinkGeneratorModal';
import { Footer as DeyaFooter } from './components/deya/Footer';
import { DigitalGiftSection as DeyaDigitalGiftSection } from './components/deya/DigitalGiftSection';

import {
  PROFILES as TIRTA_PROFILES,
  GALLERY_ITEMS as TIRTA_GALLERY_ITEMS,
} from './data/initialData';

import {
  PROFILES as DEYA_PROFILES,
  GALLERY_ITEMS as DEYA_GALLERY_ITEMS,
  DIGITAL_ACCOUNTS as DEYA_DIGITAL_ACCOUNTS,
} from './data/deyaData';

import { Wish } from './types';

export default function InvitationPage() {
  const { slug } = useParams();

  const isDeya = slug === 'mepandes-alya-dan-deya';

  const PROFILES = isDeya ? DEYA_PROFILES : TIRTA_PROFILES;

  const GALLERY_ITEMS = isDeya
    ? DEYA_GALLERY_ITEMS
    : TIRTA_GALLERY_ITEMS;

  console.log('slug:', slug);
  console.log('isDeya:', isDeya);

  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState('Tamu Undangan');

  const [wishes, setWishes] = useState<Wish[]>([]);

  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const [isLinkGenOpen, setIsLinkGenOpen] = useState(false);

  // ==========================
  // loadWishes
  // ==========================
  const loadWishes = async () => {
  const { data, error } = await supabase
    .from("guestbook")
    .select("*")
    .eq("invitation_id", slug)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  const formatted: Wish[] = (data ?? []).map((item: any) => ({
    id: item.id.toString(),
    name: item.nama,
    attendance: item.hadir,
    guestCount: item.jumlah_tamu,
    message: item.ucapan,
    timestamp: new Date(item.created_at).toLocaleString("id-ID"),
  }));

  setWishes(formatted);
};

  // ==========================
  // Read Guest Name
  // ==========================

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const toParam = params.get('to');

    if (toParam && toParam.trim()) {
      setGuestName(toParam.trim());
    }
  }, []);

 useEffect(() => {
  if (slug) {
    loadWishes();
  }
}, [slug]);

  // ==========================
  // Reveal Animation
  // ==========================

  useEffect(() => {
    if (!isOpen) return;

    const reveals = document.querySelectorAll('.reveal, .image-reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { 
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px", 
      }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();

  }, [isOpen]);
 

  // ==========================
  // Open Invitation
  // ==========================

  const handleOpenInvitation = () => {
    setIsOpen(true);
    document.body.classList.remove('no-scroll');
  };

  // ==========================
  // Add Wish
  // ==========================

const handleAddWish = async (
  newWishData: Omit<Wish, "id" | "timestamp">
) => {
  const { error } = await supabase
    .from("guestbook")
    .insert([
      {
        invitation_id: slug,
        nama: newWishData.name,
        hadir: newWishData.attendance,
        jumlah_tamu: newWishData.guestCount ?? 1,
        ucapan: newWishData.message,
      },
    ]);

  if (error) {
    console.error(error);
    return;
  }

  await loadWishes();
};

  const CoverComponent = isDeya ? DeyaWelcomeCover : WelcomeCover;
  const HeroComponent = isDeya ? DeyaHeroSection : HeroSection;
  const QuoteComponent = isDeya ? DeyaQuoteSection : QuoteSection;
  const ProfileComponent = isDeya ? DeyaProfileSection : ProfileSection;
  const GalleryComponent = isDeya ? DeyaGallerySection : GallerySection;
  const EventInfoComponent = isDeya ? DeyaEventInfoSection : EventInfoSection;
  const MapComponent = isDeya ? DeyaMapSection : MapSection;
  const RsvpComponent = isDeya ? DeyaRsvpSection : RsvpSection;
  const FooterComponent = isDeya ? DeyaFooter : Footer;
  const AudioComponent = isDeya ? DeyaAudioPlayer : AudioPlayer;
  const LightboxComponent = isDeya ? DeyaLightboxModal : LightboxModal;
  const LinkGeneratorComponent = isDeya
    ? DeyaLinkGeneratorModal
    : LinkGeneratorModal;

  return (
    <div className="min-h-screen bg-white text-charcoal font-sans selection:bg-primary/20 selection:text-primary relative">
      <CoverComponent
        guestName={guestName}
        isOpen={isOpen}
        onOpen={handleOpenInvitation}
      />

      <main
        className={`transition-opacity duration-1000 ${
          isOpen
            ? 'opacity-100'
            : 'opacity-0 pointer-events-none h-screen overflow-hidden'
        }`}
      >
        <HeroComponent />

        <QuoteComponent />

        <ProfileComponent
          profiles={PROFILES}
          onSelectImage={(src, alt) => setLightboxImage({ src, alt })}
        />

        <GalleryComponent
          items={GALLERY_ITEMS}
          onSelectImage={(src, alt) => setLightboxImage({ src, alt })}
        />

        <EventInfoComponent />

        <MapComponent />

        {isDeya ? (
          <DeyaDigitalGiftSection accounts={DEYA_DIGITAL_ACCOUNTS} />
        ) : (
          <DigitalGiftSection />
        )}

        <RsvpComponent
          wishes={wishes}
          onAddWish={handleAddWish}
        />

        <FooterComponent
          onOpenLinkGenerator={() => setIsLinkGenOpen(true)}
        />
      </main>

      <AudioComponent autoStart={isOpen} />

      <LightboxComponent
        src={lightboxImage?.src || null}
        alt={lightboxImage?.alt || ''}
        onClose={() => setLightboxImage(null)}
      />

      <LinkGeneratorComponent
        isOpen={isLinkGenOpen}
        onClose={() => setIsLinkGenOpen(false)}
        currentGuest={guestName}
      />
    </div>
  );
}