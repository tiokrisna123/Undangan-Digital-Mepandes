import React from 'react';
import { GalleryItem } from '../types';
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
    <section className="bg-cream py-24 px-6 border-y border-gray-100">

      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary text-center font-semibold reveal delay-1">
          DOKUMENTASI
        </p>

        <h2 className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-charcoal text-center mt-3 mb-16 reveal delay-2">
          OUR GALLERY
        </h2>

        {/* Gallery */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

          {items.map((item, index) => (

            <div
              key={item.id}
              onClick={() => onSelectImage(item.src, item.caption || item.alt)}
              className={`
                image-reveal
                rounded-2xl
                overflow-hidden
                cursor-pointer
                group
                relative
                shadow-sm
                hover:shadow-xl
                transition-shadow
                duration-500
                delay-${(index % 6) + 1}
              `}
            >

              <div className="aspect-[4/5]">

                <img
                  src={item.src}
                  alt={item.alt}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

              </div>

              {/* Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-black/40
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                  flex
                  items-end
                  justify-between
                  p-5
                "
              >

                <span className="font-serif italic text-white text-sm">
                  {item.caption || item.alt}
                </span>

                <Maximize2 className="w-5 h-5 text-white" />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};