import React from 'react';
import { Profile } from '../types';

interface ProfileSectionProps {
  profiles: Profile[];
  onSelectImage: (src: string, alt: string) => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  profiles,
  onSelectImage,
}) => {
  return (
    <section className="bg-white">

      {/* Header */}
      <div className="py-24 px-6 text-center">

        <p className="font-sans text-[10px] tracking-[0.4em] text-primary uppercase font-semibold mb-3 reveal delay-1">
          PUTRI KAMI
        </p>

        <h2 className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-charcoal reveal delay-2">
          Sang Saskara
        </h2>

      </div>

      {/* Profile */}
      {profiles.map((person) => (
        <section
          key={person.id}
          onClick={() => onSelectImage(person.image, person.name)}
          className="relative h-screen w-full overflow-hidden cursor-pointer group"
        >

          {/* Background Image */}
          <img
            src={person.image}
            alt={person.name}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-center
              transition-all
              duration-[1800ms]
              ease-out
              group-hover:scale-105
              image-reveal
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/15" />

          {/* Bottom Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black via-black/70 to-transparent" />

          {/* Text */}
          <div className="absolute bottom-20 left-0 right-0 px-8 text-center text-white">

            <h3
              className="font-serif text-4xl md:text-5xl italic leading-tight reveal delay-1"
              style={{
                textShadow: "0 4px 16px rgba(0,0,0,.9)"
              }}
            >
              {person.name}
            </h3>

            <p
              className="mt-4 text-[11px] tracking-[0.45em] uppercase text-primary reveal delay-2"
            >
              {person.order}
            </p>

            {person.bio && (
              <p
                className="mt-6 max-w-md mx-auto text-sm md:text-base leading-8 text-white/90 reveal delay-3"
                style={{
                  textShadow: "0 2px 8px rgba(0,0,0,.8)"
                }}
              >
                {person.bio}
              </p>
            )}

          </div>

        </section>
      ))}
    </section>
  );
};