import React from 'react';
import { GalleryItem } from '../../types';
import { Maximize2 } from 'lucide-react';

interface GallerySectionProps {
  items: GalleryItem[];
  onSelectImage: (src: string, alt: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  items,
  onSelectImage,
}) => {
  return (
    <section
      className="
        relative
        overflow-visible
        bg-gradient-to-b
        from-[#5C1A1F]
        via-[#6b2a2f]
        to-[#28402F]
        px-6
        py-24
      "
    >
      {/* =========================
          FLORAL FRAME
      ========================== */}

      {/* KIRI ATAS
          Sambungan dari Profile Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-[-30%]
          z-20
          h-[35%]
          w-auto
          object-contain
          object-left
          select-none
        "
      />
      {/* KANAN ATAS
          Sambungan dari Profile Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-[-30%]
          z-20
          h-[35%]
          w-auto
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />
      {/* KIRI ATAS
          Sambungan dari Profile Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-[-19%]
          z-20
          h-[35%]
          w-auto
          translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />
      {/* KANAN ATAS
          Sambungan dari Profile Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-[-19%]
          z-20
          h-[35%]
          w-auto
          translate-y-1/2
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />
      {/* KIRI BAWAH
          Sambungan dari Profile Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          bottom-[55%]
          z-20
          h-[35%]
          w-auto
          translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />
      {/* KANAN BAWAH
          Sambungan dari Profile Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          bottom-[55%]
          z-20
          h-[35%]
          w-auto
          translate-y-1/2
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />


      {/* =========================
          CONTENT
      ========================== */}

      <div className="relative z-30 mx-auto max-w-5xl">
        <p
          className="
            mb-3
            text-center
            font-sans
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.4em]
            text-[#d8b36a]
          "
        >
          DOKUMENTASI
        </p>

        <h2
          className="
            mb-16
            text-center
            font-serif
            text-2xl
            uppercase
            tracking-widest
            text-white
            md:text-3xl
          "
          style={{
            textShadow: '0 3px 10px rgba(0,0,0,0.35)',
          }}
        >
          Kenangan Suci
        </h2>

        <div className="masonry">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                onSelectImage(item.src, item.caption || item.alt)
              }
              className="
                group
                relative
                mb-4
                cursor-pointer
                overflow-hidden
                rounded-sm
                shadow-sm
                transition-shadow
                hover:shadow-md
              "
            >
              <img
                src={item.src}
                alt={item.alt}
                className="
                  h-auto
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  flex
                  flex-col
                  justify-end
                  bg-black/40
                  p-4
                  text-white
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-sm italic">
                    {item.caption || item.alt}
                  </span>

                  <Maximize2 className="h-4 w-4 text-[#d8b36a]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};