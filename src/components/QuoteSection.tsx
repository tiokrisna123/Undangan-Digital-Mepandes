import React from 'react';
import { Quote } from 'lucide-react';

export const QuoteSection: React.FC = () => {
  return (
    <section className="bg-cream py-24 px-6 text-center border-b border-gray-100">
      <div className="max-w-3xl mx-auto reveal active">
        <Quote className="w-10 h-10 text-primary mx-auto mb-8 opacity-80" />

        <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-charcoal">
          &ldquo;Ojasca me, sahasca me, atma ca me. Tanusca me,
          sarma ca me. Warma ca me, yajnena kalpantam.&rdquo;
        </p>

        <div className="w-14 h-px bg-primary/40 mx-auto my-6"></div>

        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-primary font-semibold">
          Yajurveda XVIII.3
        </p>

        <p className="mt-8 font-sans text-base md:text-lg leading-8 text-charcoal/80">
          Dengan sarana persembahan <span className="italic">(Yajña)</span>,
          semoga kami memperoleh kemuliaan, kejayaan, kekuatan rohani,
          kekuatan jasmani, kesejahteraan, serta perlindungan dalam kehidupan.
        </p>
      </div>
    </section>
  );
};