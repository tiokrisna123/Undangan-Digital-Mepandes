import React, { useState, useEffect } from 'react';

export const CountdownSection: React.FC = () => {
  const targetDate = new Date('2026-07-27T09:00:00+08:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );

      const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section
      className="
        relative
        overflow-visible
        bg-gradient-to-b
        from-[#5C1A1F]
        via-[#542a2d]
        to-[#28402F]
        px-6
        py-16
        md:py-20
        text-center
        text-white
      "
    >
      {/* =========================
          CONTENT
      ========================== */}

      <div className="relative z-30 mx-auto w-[95%] max-w-xl rounded-sm border border-primary/20 bg-gradient-to-br from-charcoal via-[#432326] to-primary p-4 shadow-2xl reveal active md:p-12">
        <p className="mb-8 font-sans text-[10px] font-semibold uppercase tracking-[0.4em] text-white/75 md:mb-12">
          HITUNG MUNDUR
        </p>

        <div
          className="grid grid-cols-4 gap-2 md:gap-12"
          id="countdown"
        >
          {/* HARI */}
          <div className="rounded-xs border border-ivory/80 bg-ivory p-4 shadow-xl md:p-6">
            <p className="mb-2 font-serif text-3xl font-light text-primary md:text-6xl">
              {timeLeft.days.toString().padStart(2, '0')}
            </p>

            <p className="font-sans text-[9px] font-semibold tracking-[0.2em] text-charcoal/60">
              HARI
            </p>
          </div>

          {/* JAM */}
          <div className="rounded-xs border border-ivory/80 bg-ivory p-4 shadow-xl md:p-6">
            <p className="mb-2 font-serif text-3xl font-light text-primary md:text-6xl">
              {timeLeft.hours.toString().padStart(2, '0')}
            </p>

            <p className="font-sans text-[9px] font-semibold tracking-[0.2em] text-charcoal/60">
              JAM
            </p>
          </div>

          {/* MENIT */}
          <div className="rounded-xs border border-ivory/80 bg-ivory p-4 shadow-xl md:p-6">
            <p className="mb-2 font-serif text-3xl font-light text-primary md:text-6xl">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </p>

            <p className="font-sans text-[9px] font-semibold tracking-[0.2em] text-charcoal/60">
              MENIT
            </p>
          </div>

          {/* DETIK */}
          <div className="rounded-xs border border-ivory/80 bg-ivory p-4 shadow-xl md:p-6">
            <p className="mb-2 font-serif text-3xl font-light text-primary md:text-6xl">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </p>

            <p className="font-sans text-[9px] font-semibold tracking-[0.2em] text-charcoal/60">
              DETIK
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};