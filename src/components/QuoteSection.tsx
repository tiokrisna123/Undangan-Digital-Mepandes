import React from 'react';
import { Quote } from 'lucide-react';

export const QuoteSection: React.FC = () => {
  return (
    <section className="bg-cream py-24 px-6 text-center border-b border-gray-100">
      <div className="max-w-3xl mx-auto">

        {/* Quote Icon */}
        <Quote
          className="w-10 h-10 text-primary mx-auto mb-8 opacity-80 reveal delay-1"
        />

        {/* Sanskrit Verse */}
        <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-charcoal reveal delay-2">
          &ldquo;Ojasca me, sahasca me, atma ca me.
          Tanusca me, sarma ca me.
          Warma ca me, yajnena kalpantam.&rdquo;
        </p>

        {/* Divider */}
        <div className="w-14 h-px bg-primary/40 mx-auto my-6 reveal delay-3"></div>

        {/* Source */}
        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-primary font-semibold reveal delay-4">
          Yajurveda XVIII.3
        </p>

        {/* Translation */}
        <p className="mt-8 font-sans text-base md:text-lg leading-8 text-charcoal/80 reveal delay-5">
          Dengan sarana persembahan <span className="italic">(Yajña)</span>,
          semoga kami memperoleh kemuliaan, kejayaan, kekuatan rohani,
          kekuatan jasmani, kesejahteraan, serta perlindungan dalam kehidupan.
        </p>

        {/* Divider */}
        <div className="w-20 h-px bg-primary/20 mx-auto my-12 reveal delay-6"></div>

        {/* Invitation */}
        <div className="max-w-2xl mx-auto">

          <h3 className="font-serif text-2xl text-primary mb-6 reveal delay-7">
            Om Swastyastu
          </h3>

          <p className="font-sans text-base md:text-lg leading-9 text-charcoal/80 reveal delay-8">
            Atas <span className="italic">Asung Kerta Wara Nugraha</span> Ida
            Sang Hyang Widhi Wasa/Tuhan Yang Maha Esa, kami bermaksud
            mengundang Bapak/Ibu/Saudara/i untuk menghadiri{' '}
            <span className="font-medium">
              Resepsi Upacara Manusa Yadnya
              <span className="italic"> (Mepandes/Potong Gigi)</span>
            </span>{' '}
            putri kami.
          </p>

        </div>

      </div>
    </section>
  );
};