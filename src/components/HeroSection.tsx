import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="h-screen w-full relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1600"
        alt="Hero Background"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 flex items-end justify-center pb-20 md:pb-24 bg-gradient-to-t from-white via-white/40 to-black/30">
        <div className="text-center reveal active px-4">
          <p className="font-sans text-[10px] md:text-[11px] tracking-[0.4em] text-primary mb-3 uppercase font-semibold">
            SANG SASKARA
          </p>
          <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider text-charcoal font-medium">
            Manusa Yadnya
          </h2>
          <div className="w-16 h-px bg-primary/40 mx-auto mt-6"></div>
        </div>
      </div>
    </section>
  );
};
