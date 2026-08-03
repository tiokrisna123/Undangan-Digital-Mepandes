import React from 'react';

interface WelcomeCoverProps {
  guestName: string;
  isOpen: boolean;
  onOpen: () => void;
}

export const WelcomeCover: React.FC<WelcomeCoverProps> = ({
  guestName,
  isOpen,
  onOpen,
}) => {
  return (
    <div
      id="welcome-cover"
      className={`fixed inset-0 flex flex-col items-center justify-center text-center px-6 md:px-8 z-[100] transition-transform duration-1000 cubic-bezier(0.77,0,0.175,1) ${
        isOpen ? '-translate-y-full pointer-events-none' : 'translate-y-0'
      }`}
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200"
          alt="Mepandes Ceremony Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 text-white max-w-lg mx-auto flex flex-col items-center">
        <p className="font-sans text-[10px] md:text-[11px] tracking-[0.4em] mb-4 uppercase text-white/80">
          UNDANGAN UPACARA
        </p>

        <h1 className="font-serif text-5xl md:text-7xl mb-2 italic tracking-wide text-white font-normal">
          Mepandes Dayu Tirta & Dayu Ami 
        </h1>

        <p className="font-sans text-xs tracking-[0.25em] mb-12 text-primary font-light">
          27 . 07 . 26
        </p>

        <div className="mb-14 text-center">
          <p className="font-sans text-[10px] tracking-[0.25em] mb-2 uppercase text-white/60">
            KEPADA YTH.
          </p>
          <p className="font-serif text-2xl md:text-3xl italic font-medium text-white max-w-xs mx-auto break-words">
            {guestName || 'Tamu Undangan'}
          </p>
        </div>

        <button
          id="open-btn"
          onClick={onOpen}
          className="px-10 py-4 border border-primary text-primary font-sans text-[10px] tracking-[0.3em] uppercase bg-black/30 backdrop-blur-sm hover:bg-primary hover:text-white transition-all duration-500 scale-100 hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
        >
          BUKA UNDANGAN
        </button>
      </div>
    </div>
  );
};
