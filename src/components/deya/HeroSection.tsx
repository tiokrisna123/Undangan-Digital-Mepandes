import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#28402F] via-[#1d3024] to-[#5C1A1F]">

      {/* =========================
          BACKGROUND FOTO
      ========================== */}
      <img
        src="/assets/foto-deya-berdua.jpeg"
        alt="Hero Background"
        className="
          absolute
          inset-0
          z-0
          h-full
          w-full
          object-cover
          object-center
          scale-[0.90]
        "
      />

      {/* =========================
          FLORAL FRAME
      ========================== */}

      {/* KIRI ATAS */}
      <img
        src="/assets/floral-kiri-atas.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-20
          w-[60%]
          -translate-x-[8%]
          -translate-y-[8%]
          select-none
        "
      />

      {/* KANAN ATAS */}
      <img
        src="/assets/floral-kiri-atas.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-20
          w-[60%]
          translate-x-[8%]
          -translate-y-[8%]
          scale-x-[-1]
          select-none
        "
      />

      {/* KIRI TENGAH */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-[42%]
          z-20
          h-[42%]
          w-auto
          -translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />

      {/* KANAN TENGAH BAWAH*/}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-[75%]
          z-20
          h-[40%]
          w-auto
          -translate-y-1/2
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />

      {/* KIRI TENGAH BAWAH*/}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-[75%]
          z-20
          h-[40%]
          w-auto
          -translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />

      {/* KANAN TENGAH */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-[42%]
          z-20
          h-[42%]
          w-auto
          -translate-y-1/2
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />

      {/* =========================
          CONTENT
      ========================== */}

      <div
        className="
          absolute
          top-[18%]
          left-1/2
          z-30
          w-full
          -translate-x-1/2
          px-4
          text-center
          reveal
          active
        "
      >
        <p
          className="
            mb-3
            font-sans
            text-sm
            uppercase
            tracking-[0.35em]
            text-white
          "
          style={{
            textShadow: '0 3px 10px rgba(0,0,0,0.9)',
          }}
        >
          MEPANDES
        </p>

        <h2
          className="
            font-serif
            text-3xl
            font-medium
            uppercase
            tracking-wider
            text-white
            md:text-5xl
          "
          style={{
            textShadow: '0 4px 15px rgba(0,0,0,0.9)',
          }}
        >
          Manusa Yadnya
        </h2>

        <div className="mx-auto mt-6 h-px w-16 bg-[#c9a65b]/70" />
      </div>

    </section>
  );
};