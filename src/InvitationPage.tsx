import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { WelcomeCover } from './components/WelcomeCover';
import { HeroSection } from './components/HeroSection';
import { QuoteSection } from './components/QuoteSection';
import { ProfileSection } from './components/ProfileSection';
import { GallerySection } from './components/GallerySection';
import { EventInfoSection } from './components/EventInfoSection';
import { MapSection } from './components/MapSection';
import { CountdownSection } from './components/CountdownSection';
import { RsvpSection } from './components/RsvpSection';
import { AudioPlayer } from './components/AudioPlayer';
import { LightboxModal } from './components/LightboxModal';
import { LinkGeneratorModal } from './components/LinkGeneratorModal';
import { Footer } from './components/Footer';

import { PROFILES, GALLERY_ITEMS, INITIAL_WISHES } from './data/initialData';
import { Wish } from './types';

export default function InvitationPage() {
  const { slug } = useParams();
  console.log(slug);

  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState('Tamu Undangan');

  const [wishes, setWishes] = useState<Wish[]>(() => {
    try {
      const saved = localStorage.getItem('mepandes_wishes');
      return saved ? JSON.parse(saved) : INITIAL_WISHES;
    } catch {
      return INITIAL_WISHES;
    }
  });

  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const [isLinkGenOpen, setIsLinkGenOpen] = useState(false);

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

  // ==========================
  // Save Wishes
  // ==========================

  useEffect(() => {
    try {
      localStorage.setItem(
        'mepandes_wishes',
        JSON.stringify(wishes)
      );
    } catch (e) {
      console.warn(e);
    }
  }, [wishes]);

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

  const handleAddWish = (
    newWishData: Omit<Wish, 'id' | 'timestamp'>
  ) => {
    const newWish: Wish = {
      ...newWishData,
      id: Date.now().toString(),
      timestamp: 'Baru saja',
    };

    setWishes((prev) => [newWish, ...prev]);
  };

  return (
    <div className="min-h-screen bg-white text-charcoal font-sans selection:bg-primary/20 selection:text-primary relative">

      <WelcomeCover
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
        <HeroSection />

        <QuoteSection />

        <ProfileSection
          profiles={PROFILES}
          onSelectImage={(src, alt) =>
            setLightboxImage({ src, alt })
          }
        />

        <GallerySection
          items={GALLERY_ITEMS}
          onSelectImage={(src, alt) =>
            setLightboxImage({ src, alt })
          }
        />

        <EventInfoSection />

        <MapSection />

        <CountdownSection />

        <RsvpSection
          wishes={wishes}
          onAddWish={handleAddWish}
        />

        <Footer
          onOpenLinkGenerator={() =>
            setIsLinkGenOpen(true)
          }
        />
      </main>

      <AudioPlayer autoStart={isOpen} />

      <LightboxModal
        src={lightboxImage?.src || null}
        alt={lightboxImage?.alt || ''}
        onClose={() => setLightboxImage(null)}
      />

      <LinkGeneratorModal
        isOpen={isLinkGenOpen}
        onClose={() => setIsLinkGenOpen(false)}
        currentGuest={guestName}
      />
    </div>
  );
}