import React from 'react';
import { MapPin } from 'lucide-react';

export const MapSection: React.FC = () => {
  return (
    <section className="h-[450px] relative reveal active">
      <iframe
        className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.964777181408!2d115.22985849999999!3d-8.5993802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f0041496623%3A0xf63af4ae4e7ae1cc!2sWISNU%20BHIZER%20HOUSE!5e0!3m2!1sen!2sid!4v1786027073041!5m2!1sen!2sid"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Lokasi Upacara Mepandes"
/>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="https://www.google.com/maps/place/WISNU+BHIZER+HOUSE/@-8.5993802,115.2298585,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd23f0041496623:0xf63af4ae4e7ae1cc!8m2!3d-8.5993802!4d115.2298585!16s%2Fg%2F11ycd7frw0!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgwMy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-white border border-charcoal text-charcoal font-sans text-[9px] tracking-[0.25em] uppercase hover:bg-charcoal hover:text-white transition-all duration-300 flex items-center gap-3 shadow-xl"
        >
          <MapPin className="w-4 h-4 text-primary" />
          BUKA DI GOOGLE MAPS
        </a>
      </div>
    </section>
  );
};
