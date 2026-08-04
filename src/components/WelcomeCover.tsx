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
        isOpen ? '-translate-y-[105%] pointer-events-none' : 'translate-y-0'
      }`}
    >
      <div className="absolute inset-0">
        <img
          src="/assets/FOTO AWAL.jpg"
          alt="Mepandes Ceremony Cover"
          className="w-full h-full object-cover object-top scale-105 brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full w-full max-w-lg mx-auto text-white">
        {/* ================= HEADER ================= */}
        <div className="text-center pt-10 -translate-y-0">
          <p className="font-sans text-sm md:text-base tracking-[0.4em] mb-4 uppercase text-white/80"
              style={{  textShadow: "0 4px 12px rgba(0,0,0,.6)" }}
          >
            UNDANGAN UPACARA
          </p>

          <h1 className="font-serif text-4xl md:text-6xl italic leading-none text-white"
            style={{  textShadow: "0 8px 20px rgba(0,0,0,1)" }}
          >
            Mepandes
          </h1>

          <h2 className="font-serif text-4xl md:text-6xl italic leading-none text-white mt-1"
            style={{  textShadow: "0 8px 20px rgba(0,0,0,1)" }}
          >
            Dayu Tirta & Dayu Ami
          </h2>

        <div className="flex items-center justify-center gap-4 mt-0">
          <div className="w-10 h-px bg-amber-200"></div>
          <p 
            className="font-sans text-base tracking-[0.3em] mt-2 text-amber-200 font-medium"
            style={{ textShadow: "0 2px 6px rgba(0,0,0,.8)" }}  
          >
            20 . 08 . 2026
          </p>
          <div className="w-10 h-px bg-amber-200"></div>
          </div>
        </div>

        {/* Mendorong footer ke bawah */}
        <div className="flex-1"></div>

        {/* ================= FOOTER ================= */}
        <div className="pb-16 text-center">
          <div className="mb-8">
            <p className="font-sans text-xs tracking-[0.35em] mb-3 uppercase text-amber-200"
              style={{ textShadow: "0 3px 10px rgba(0,0,0,.9" }}
            >
              KEPADA YTH.
            </p>

            <p className="font-serif text-3xl md:text-4xl italic text-white max-w-xs mx-auto break-words"
              style={{ textShadow: "0 4px 16px rgba(0,0,0,.9" }}
            >
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
    </div>
  );
};