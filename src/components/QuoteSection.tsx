import React from 'react';
import { Quote } from 'lucide-react';

export const QuoteSection: React.FC = () => {
  return (
    <section className="bg-cream py-24 px-6 text-center border-b border-gray-100">
      <div className="max-w-2xl mx-auto reveal active">
        <Quote className="w-10 h-10 text-primary mx-auto mb-8 opacity-80" />
        <p className="font-serif text-xl md:text-3xl italic leading-relaxed mb-8 text-charcoal font-normal">
          &ldquo;Pancawali krama, suci laksana, ngupadi kerahayuan jagat. Mepandes pinaka simbol pamutus rwa bhineda ring angga sarira.&rdquo;
        </p>
        <div className="w-12 h-px bg-primary/40 mx-auto mb-4"></div>
        <p className="font-sans text-[11px] tracking-[0.3em] text-primary uppercase font-medium">
          Bhagawad Gita
        </p>
      </div>
    </section>
  );
};
