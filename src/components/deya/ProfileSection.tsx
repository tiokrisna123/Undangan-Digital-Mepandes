import React from 'react';
import { Profile } from '../../types';

interface ProfileSectionProps {
  profiles: Profile[];
  onSelectImage: (src: string, alt: string) => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  profiles,
  onSelectImage,
}) => {
  return (
    <section
      className="
        relative
        overflow-visible
        bg-gradient-to-b
        from-[#28402F]
        via-[#26382E]
        via-[20%]
        via-[#3d171d]
        via-[55%]
        to-[#5C1A1F]
        px-6
        py-24
      "
    >
      {/* =========================
          FLORAL FRAME
      ========================== */}

      {/* KIRI TENGAH ATAS */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-[2%]
          z-20
          h-[15%]
          w-auto
          object-contain
          object-left
          select-none
        "
      />

      {/* KANAN TENGAH ATAS */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-[2%]
          z-20
          h-[15%]
          w-auto
          scale-x-[-1]
          object-contain
          object-left
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
          top-[7%]
          z-20
          h-[15%]
          w-auto
          translate-y-1/2
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
          top-[7%]
          z-20
          h-[15%]
          w-auto
          scale-x-[-1]
          translate-y-1/2
          object-contain
          object-left
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
          top-[19%]
          z-20
          h-[15%]
          w-auto
          translate-y-1/2
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
          top-[19%]
          z-20
          h-[15%]
          w-auto
          scale-x-[-1]
          translate-y-1/2
          object-contain
          object-left
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
          top-[31%]
          z-20
          h-[15%]
          w-auto
          translate-y-1/2
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
          top-[31%]
          z-20
          h-[15%]
          w-auto
          translate-y-1/2
          scale-x-[-1]
          object-contain
          object-left
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
          top-[43%]
          z-20
          h-[15%]
          w-auto
          translate-y-1/2
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
          top-[43%]
          z-20
          h-[15%]
          w-auto
          translate-y-1/2
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />

      {/* KIRI TENGAH BAWAH */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          bottom-[30%]
          z-20
          h-[15%]
          w-auto
          translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />

      {/* KANAN TENGAH BAWAH */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          bottom-[30%]
          z-20
          h-[15%]
          w-auto
          translate-y-1/2
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />
      {/* KIRI TENGAH BAWAH */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          bottom-[18%]
          z-20
          h-[15%]
          w-auto
          translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />
      {/* KANAN TENGAH BAWAH */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          bottom-[18%]
          z-20
          h-[15%]
          w-auto
          translate-y-1/2
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />

      {/* =========================
          CONTENT
      ========================== */}

      <div className="relative z-30 mx-auto flex max-w-4xl flex-col items-center">
        <p className="mb-3 text-center font-sans text-[10px] font-semibold uppercase tracking-[0.4em] text-gold">
          PUTRA PUTRI KAMI
        </p>

        <h2 className="mb-16 text-center font-serif text-2xl uppercase tracking-widest text-cream md:text-3xl">
          Sang Saskara
        </h2>

        <div className="grid w-full max-w-3xl grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
          {profiles.map((person) => (
            <div
              key={person.id}
              className="group reveal active flex flex-col items-center text-center"
            >
              {/* FOTO */}
              <div
                onClick={() => onSelectImage(person.image, person.name)}
                className="
                  relative
                  mb-6
                  h-80
                  w-60
                  cursor-pointer
                  overflow-hidden
                  rounded-none
                  border
                  border-gold
                  p-1
                  transition-all
                  duration-500
                  group-hover:scale-105
                  group-hover:shadow-xl
                  md:h-56
                  md:w-56
                "
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className={`h-full w-full object-cover scale-100 ${
                    person.id === 'made'
                      ? 'scale-[1.5] -translate-y-4'
                      : 'scale-130'
                  }`}
                />

                {/* OVERLAY SAAT HOVER */}
                <div className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-colors group-hover:bg-primary/10">
                  <span className="rounded-full bg-black/50 px-3 py-1 font-sans text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                    Lihat Foto
                  </span>
                </div>
              </div>

              {/* NAMA */}
              <p className="mb-1 text-center font-serif text-2xl font-medium italic leading-tight text-cream">
                {person.id === 'nyoman' ? (
                  <>
                    Komang Resya
                    <br />
                    Juwanita Dewi
                  </>
                ) : (
                  person.name
                )}
              </p>

              {/* URUTAN ANAK */}
              <p className="mb-1 text-center font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                {person.order}
              </p>

              {/* BIODATA */}
              {person.bio && (
                <p className="mt-2 max-w-[250px] text-center font-sans text-xs font-light leading-relaxed text-ivory/80">
                  {person.bio}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};