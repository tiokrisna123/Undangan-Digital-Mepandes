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
      className={`fixed inset-0 z-[100] flex flex-col overflow-hidden px-6 text-center transition-transform duration-1000 cubic-bezier(0.77,0,0.175,1) md:px-8 ${
        isOpen
          ? '-translate-y-full pointer-events-none'
          : 'translate-y-0'
      }`}
    >
      {/* =========================
          BACKGROUND FOTO
      ========================== */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-[#28402F] via-[#1d3024] to-[#5C1A1F]">
        <img
          src="/assets/foto-deya-berdua.jpeg"
          alt="Mepandes Ceremony Cover"
          className="h-full w-full object-cover scale-[0.90]"
        />

        {/* Overlay dasar */}
        <div className="absolute inset-0 bg-black/0" />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(
              ellipse_at_center,
              transparent_18%,
              rgba(40,64,47,0.20)_50%,
              rgba(10,5,6,0.85)_100%
            )]
          "
        />
      </div>

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
          w-[45%]
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
          w-[45%]
          scale-x-[-1]
          select-none
        "
      />

      {/* KIRI BAWAH */}
      <img
        src="/assets/floral-kiri-bawah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-20
          w-[40%]
          select-none
        "
      />

      {/* KANAN BAWAH */}
      <img
        src="/assets/floral-kiri-bawah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          z-20
          w-[40%]
          scale-x-[-1]
          select-none
        "
      />

      {/* FLORAL TENGAH KIRI */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-[47%]
          z-10
          h-[45%]
          w-auto
          -translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />

      {/* FLORAL TENGAH KANAN */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-[47%]
          z-10
          h-[45%]
          w-auto
          -translate-y-1/2
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />

      {/* =========================
          CONTENT ATAS
      ========================== */}
      <div className="relative z-30 pt-[4.25rem]">
        <p
          className="mb-4 font-sans text-sm uppercase tracking-[0.4em] text-white/80 md:text-base"
          style={{
            textShadow: '0 4px 12px rgba(0,0,0,.6)',
          }}
        >
          UNDANGAN UPACARA
        </p>

        <h1
          className="font-serif text-4xl italic leading-none text-white md:text-6xl"
          style={{
            textShadow: '0 8px 20px rgba(0,0,0,1)',
          }}
        >
          Mepandes
        </h1>

        <h2
          className="mt-1 font-serif text-4xl italic leading-none text-white md:text-6xl"
          style={{
            textShadow: '0 8px 20px rgba(0,0,0,1)',
          }}
        >
          Deya Indriyani &
          <br />
          Kakak Deya
        </h2>

        <div className="mt-0 flex items-center justify-center gap-4">
          <div className="h-px w-10 bg-amber-200" />

          <p
            className="mt-2 font-sans text-base font-medium tracking-[0.3em] text-amber-200"
            style={{
              textShadow: '0 2px 6px rgba(0,0,0,.8)',
            }}
          >
            20 . 08 . 2026
          </p>

          <div className="h-px w-10 bg-amber-200" />
        </div>
      </div>

      {/* =========================
          SPACER
      ========================== */}
      <div className="flex-1" />

      {/* =========================
          FOOTER CONTENT
      ========================== */}
      <div className="relative z-30 pb-12 text-center">

        {/* AREA NAMA TAMU */}
        <div className="relative mx-auto mb-7 w-fit max-w-[90%] px-8 py-4">

          {/* Backdrop */}
          <div
            className="
              absolute
              inset-0
              -z-10
              rounded-sm
              bg-gradient-to-r
              from-black/0
              via-black/65
              to-black/0
              blur-sm
            "
          />

          <p
            className="
              mb-2
              font-sans
              text-[10px]
              uppercase
              tracking-[0.4em]
              text-[#f3dca5]
            "
            style={{
              textShadow: '0 3px 10px rgba(0,0,0,1)',
            }}
          >
            KEPADA YTH.
          </p>

          <p
            className="
              mx-auto
              break-words
              font-serif
              text-3xl
              italic
              text-white
              md:text-4xl
            "
            style={{
              textShadow: `
                0 2px 4px rgba(0,0,0,1),
                0 8px 20px rgba(0,0,0,.9)
              `,
            }}
          >
            {guestName || 'Tamu Undangan'}
          </p>
        </div>

        {/* =========================
            TOMBOL UNDANGAN
        ========================== */}
        <div className="flex -translate-y-7 items-center justify-center gap-3">

          {/* Dekorasi kiri */}
          <div className="h-px w-6 bg-gradient-to-r from-transparent to-[#c9a65b]" />

          <button
            id="open-btn"
            onClick={onOpen}
            className="
              group
              relative
              min-w-[190px]
              cursor-pointer
              overflow-hidden
              border
              border-[#c9a65b]/70
              bg-gradient-to-br
              from-[#3d111d]/90
              via-[#651d2d]/85
              to-[#240b12]/90
              px-8
              py-4
              font-sans
              text-[10px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-[#f6dfad]
              shadow-[0_8px_30px_rgba(0,0,0,0.55)]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-[#f3dca5]
              hover:shadow-[0_12px_40px_rgba(80,10,25,0.6)]
              active:translate-y-0
            "
          >
            {/* Efek cahaya */}
            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
            />

            {/* Isi tombol */}
            <span className="relative z-10">
              BUKA UNDANGAN
            </span>
          </button>

          {/* Dekorasi kanan */}
          <div className="h-px w-6 bg-gradient-to-l from-transparent to-[#c9a65b]" />
        </div>
      </div>
    </div>
  );
};