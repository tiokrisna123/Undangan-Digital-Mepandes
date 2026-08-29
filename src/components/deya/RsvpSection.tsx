import React, { useState } from 'react';
import { Wish } from '../../types';
import {
  CheckCircle2,
  MessageSquare,
  UserCheck,
} from 'lucide-react';

interface RsvpSectionProps {
  wishes: Wish[];
  onAddWish: (wish: Omit<Wish, 'id' | 'timestamp'>) => void;
}

export const RsvpSection: React.FC<RsvpSectionProps> = ({
  wishes,
  onAddWish,
}) => {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState<
    'hadir' | 'tidak_hadir' | ''
  >('');

  const [guestCount, setGuestCount] = useState<string>('1');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !attendance || !message.trim()) return;

    onAddWish({
      name: name.trim(),
      attendance: attendance as 'hadir' | 'tidak_hadir',
      guestCount:
        attendance === 'hadir'
          ? parseInt(guestCount, 10) || 1
          : 0,
      message: message.trim(),
    });

    setSubmitted(true);
    setName('');
    setAttendance('');
    setGuestCount('1');
    setMessage('');

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section
      className="
        relative
        overflow-visible
        bg-gradient-to-b
        from-[#28402F]
        via-[#542a2d]
        to-[#5C1A1F]
        px-6
        py-24
        border-b
        border-gray-100
      "
    >

      {/* =========================
          CONTENT
      ========================== */}

      <div className="relative z-30 mx-auto max-w-2xl rounded-sm border border-ivory/25 bg-charcoal/75 p-6 text-center shadow-2xl backdrop-blur-sm md:p-12">
        <div className="reveal active mb-16">
          <h2 className="mb-4 font-serif text-3xl italic text-white md:text-4xl">
            Terima Kasih
          </h2>

          <p className="font-light text-sm leading-relaxed text-white/80">
            Merupakan suatu kehormatan bagi kami atas kehadiran
            Bapak/Ibu/Saudara/i.
          </p>
        </div>

        {/* SUCCESS MESSAGE */}
        {submitted && (
          <div className="mb-8 flex flex-col items-center gap-2 rounded-sm border border-emerald-200 bg-emerald-50 p-6 text-center text-emerald-800 animate-fade-in">
            <CheckCircle2 className="h-8 w-8 text-emerald-600" />

            <p className="font-serif text-lg italic">
              Konfirmasi Berhasil Terkirim
            </p>

            <p className="font-sans text-xs text-emerald-700">
              Matur Suksma atas doa dan konfirmasi kehadiran Anda.
            </p>
          </div>
        )}

        {/* =========================
            FORM
        ========================== */}

        <form
          onSubmit={handleSubmit}
          className="space-y-8 text-left reveal active"
        >
          {/* NAMA */}
          <div>
            <label className="mb-1 block font-sans text-[9px] uppercase tracking-[0.2em] text-white/75">
              NAMA LENGKAP *
            </label>

            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan Nama Anda"
              className="
                w-full
                border-0
                border-b
                border-white/50
                bg-transparent
                py-3
                font-sans
                text-xs
                tracking-[0.1em]
                text-white
                placeholder:text-white/50
                transition-colors
                focus:border-white
                focus:ring-0
              "
            />
          </div>

          {/* KONFIRMASI */}
          <div>
            <label className="mb-1 block font-sans text-[9px] uppercase tracking-[0.2em] text-white/75">
              KONFIRMASI KEHADIRAN *
            </label>

            <select
              required
              value={attendance}
              onChange={(e) =>
                setAttendance(
                  e.target.value as 'hadir' | 'tidak_hadir'
                )
              }
              className="
                w-full
                cursor-pointer
                border-0
                border-b
                border-white/50
                bg-transparent
                py-3
                font-sans
                text-xs
                tracking-[0.1em]
                text-white
                transition-colors
                focus:border-white
                focus:ring-0
              "
            >
              <option value="" disabled className="text-gray-400">
                PILIH KONFIRMASI KEHADIRAN
              </option>

              <option value="hadir" className="bg-white text-charcoal">
                SAYA AKAN HADIR
              </option>

              <option
                value="tidak_hadir"
                className="bg-white text-charcoal"
              >
                SAYA TIDAK BISA HADIR
              </option>
            </select>
          </div>

          {/* JUMLAH TAMU */}
          {attendance === 'hadir' && (
            <div>
              <label className="mb-1 block font-sans text-[9px] uppercase tracking-[0.2em] text-white/75">
                JUMLAH TAMU *
              </label>

              <input
                type="number"
                min="1"
                max="10"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                placeholder="JUMLAH TAMU"
                className="
                  w-full
                  border-0
                  border-b
                  border-white/50
                  bg-transparent
                  py-3
                  font-sans
                  text-xs
                  tracking-[0.1em]
                  text-white
                  transition-colors
                  focus:border-white
                  focus:ring-0
                "
              />
            </div>
          )}

          {/* UCAPAN */}
          <div>
            <label className="mb-1 block font-sans text-[9px] uppercase tracking-[0.2em] text-white/75">
              UCAPAN &amp; DOA RESTU *
            </label>

            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tuliskan pesan, ucapan & doa restu..."
              className="
                w-full
                resize-none
                border-0
                border-b
                border-white/50
                bg-transparent
                py-3
                font-sans
                text-xs
                tracking-[0.1em]
                text-white
                placeholder:text-white/50
                transition-colors
                focus:border-white
                focus:ring-0
              "
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="
              flex
              w-full
              cursor-pointer
              items-center
              justify-center
              gap-2
              bg-primary
              py-5
              font-sans
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-white
              shadow-lg
              transition-all
              duration-500
              hover:bg-charcoal
            "
          >
            <MessageSquare className="h-4 w-4" />
            KIRIM KONFIRMASI
          </button>
        </form>

        {/* =========================
            WISHES FEED
        ========================== */}

        <div className="mt-24 text-left">
          <div className="mb-8 flex items-center justify-between border-b border-white/30 pb-3">
            <h3 className="flex items-center gap-2 font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-white">
              <MessageSquare className="h-4 w-4" />
              Ucapan Tamu ({wishes.length})
            </h3>

            <span className="font-sans text-[10px] text-white/70">
              {
                wishes.filter(
                  (w) => w.attendance === 'hadir'
                ).length
              }{' '}
              Akan Hadir
            </span>
          </div>

          <div className="max-h-[420px] space-y-4 overflow-y-auto pr-1">
            {wishes.map((item) => (
              <div
                key={item.id}
                className="
                  rounded-xs
                  border
                  border-gray-100
                  bg-white
                  p-6
                  shadow-xs
                  transition-colors
                  hover:border-primary/30
                  md:p-8
                "
              >
                <div className="mb-2 flex items-center justify-between">
                  <p className="flex items-center gap-2 font-serif text-base font-medium text-charcoal md:text-lg">
                    {item.name}
                  </p>

                  <span
                    className={`
                      flex
                      items-center
                      gap-1
                      rounded-full
                      px-2
                      py-0.5
                      font-sans
                      text-[9px]
                      uppercase
                      tracking-wider
                      ${
                        item.attendance === 'hadir'
                          ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
                          : 'bg-gray-100 text-gray-500'
                      }
                    `}
                  >
                    {item.attendance === 'hadir' ? (
                      <>
                        <UserCheck className="h-3 w-3" />
                        Hadir

                        {item.guestCount &&
                          item.guestCount > 1 &&
                          ` (${item.guestCount})`}
                      </>
                    ) : (
                      'Halangan'
                    )}
                  </span>
                </div>

                <p className="font-light italic text-sm leading-relaxed text-gray-600">
                  &ldquo;{item.message}&rdquo;
                </p>

                <p className="mt-3 text-right font-sans text-[9px] text-gray-400">
                  {item.timestamp}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};