import React, { useEffect, useState } from "react";

export const HeroSection: React.FC = () => {
  const images = [
    "/assets/FOTO FADE.jpg",
    "/assets/FOTO FADE (1).jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // ganti foto setiap 5 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen w-full relative overflow-hidden">

      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Hero ${index + 1}`}
          className={`
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
            transition-opacity
            duration-[2000ms]
            ease-in-out
            ${
              currentImage === index
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        />
      ))}

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