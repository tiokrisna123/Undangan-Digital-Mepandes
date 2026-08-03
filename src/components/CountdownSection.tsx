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
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="bg-charcoal py-24 text-white text-center px-6">
      <div className="max-w-4xl mx-auto reveal active">
        <p className="font-sans text-[10px] tracking-[0.4em] mb-12 uppercase opacity-60 font-semibold">
          HITUNG MUNDUR
        </p>
        <div className="grid grid-cols-4 md:gap-12 gap-2" id="countdown">
          <div className="bg-white/5 p-4 md:p-6 rounded-xs border border-white/10">
            <p className="font-serif text-3xl md:text-6xl text-primary mb-2 font-light">
              {timeLeft.days.toString().padStart(2, '0')}
            </p>
            <p className="font-sans text-[9px] tracking-[0.2em] opacity-50 font-medium">
              HARI
            </p>
          </div>
          <div className="bg-white/5 p-4 md:p-6 rounded-xs border border-white/10">
            <p className="font-serif text-3xl md:text-6xl text-primary mb-2 font-light">
              {timeLeft.hours.toString().padStart(2, '0')}
            </p>
            <p className="font-sans text-[9px] tracking-[0.2em] opacity-50 font-medium">
              JAM
            </p>
          </div>
          <div className="bg-white/5 p-4 md:p-6 rounded-xs border border-white/10">
            <p className="font-serif text-3xl md:text-6xl text-primary mb-2 font-light">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </p>
            <p className="font-sans text-[9px] tracking-[0.2em] opacity-50 font-medium">
              MENIT
            </p>
          </div>
          <div className="bg-white/5 p-4 md:p-6 rounded-xs border border-white/10">
            <p className="font-serif text-3xl md:text-6xl text-primary mb-2 font-light">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </p>
            <p className="font-sans text-[9px] tracking-[0.2em] opacity-50 font-medium">
              DETIK
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
