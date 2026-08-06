import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ExternalLink, Check } from 'lucide-react';

export const EventInfoSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Upacara+Mepandes+(Manusa+Yadnya)&dates=20260727T010000Z/20260727T060000Z&details=Upacara+Mepandes+(Potong+Gigi)+Manusa+Yadnya&location=Jero+Dusak,+Gianyar,+Bali`;

  const handleCopyLocation = () => {
    navigator.clipboard.writeText('Jero Dusak, Gianyar, Bali');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-24 px-6 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto text-center reveal active">
        <p className="font-sans text-[10px] tracking-[0.4em] text-primary mb-12 uppercase font-semibold">
          WAKTU &amp; TEMPAT
        </p>

        <div className="grid md:grid-cols-3 gap-12 items-center mb-16">
          <div className="p-4">
            <Calendar className="w-5 h-5 text-primary mx-auto mb-3" />
            <p className="font-serif text-2xl mb-1 text-charcoal">K A M I S</p>
            <p className="font-sans text-[10px] tracking-[0.2em] text-gray-500 uppercase font-medium">
              20 AGUSTUS 2026
            </p>
          </div>

          <div className="py-8 md:py-4 border-y md:border-y-0 md:border-x border-gray-100 p-4">
            <Clock className="w-5 h-5 text-primary mx-auto mb-3" />
            <p className="font-serif text-5xl md:text-6xl text-primary leading-none mb-2 font-light">
              18:00
            </p>
            <p className="font-sans text-[10px] tracking-[0.2em] text-gray-500 uppercase font-medium">
              WITA - SELESAI
            </p>
          </div>

          <div className="p-4">
            <MapPin className="w-5 h-5 text-primary mx-auto mb-3" />
            <p className="font-serif text-2xl mb-1 text-charcoal">JL. CEKOMARIA NO.31, PEGUYANGAN KANGIN 
              KEC.DENPASAR UTARA, KOTA DENPASAR, BALI, 80238
            </p>
            <p className="font-sans text-[10px] tracking-[0.2em] text-gray-500 uppercase font-medium">
              DENPASAR, BALI
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-primary text-primary font-sans text-[10px] tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            SIMPAN KE KALENDER
          </a>
          <button
            onClick={handleCopyLocation}
            className="px-6 py-3 border border-charcoal/30 text-charcoal font-sans text-[10px] tracking-[0.2em] uppercase hover:bg-charcoal hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <ExternalLink className="w-4 h-4" />}
            {copied ? 'ALAMAT DISALIN!' : 'SALIN ALAMAT'}
          </button>
        </div>
      </div>
    </section>
  );
};
