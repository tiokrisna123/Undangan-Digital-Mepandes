import React from 'react';
import { MapPin } from 'lucide-react';

export const MapSection: React.FC = () => {
  return (
    <section className="h-[450px] relative reveal active">
      <iframe
        className="w-full h-full grayscale filter hover:grayscale-0 transition-all duration-700"
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.15344331165!2d115.31886195!3d-8.5204641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f66938d8101%3A0xe5a3637c768997a4!2sGianyar%2C%20Gianyar%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
        style={{ border: 0 }}
        title="Lokasi Upacara Mepandes"
      ></iframe>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="https://maps.app.goo.gl/9r9Pj"
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
