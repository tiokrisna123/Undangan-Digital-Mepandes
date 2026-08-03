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
      <div className="max-w-5xl mx-auto">
        <p className="font-sans text-[10px] tracking-[0.4em] text-primary text-center mb-3 uppercase font-semibold">
          DOKUMENTASI
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-center mb-16 tracking-widest uppercase text-charcoal">
          Kenangan Suci
        </h2>

        <div className="masonry">
          {items.map((item) => (
            <div
              key={item.id}
              className="mb-4 reveal active overflow-hidden rounded-sm group relative cursor-pointer shadow-sm hover:shadow-md transition-shadow"
              onClick={() => onSelectImage(item.src, item.caption || item.alt)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-sm italic">{item.caption || item.alt}</span>
                  <Maximize2 className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
