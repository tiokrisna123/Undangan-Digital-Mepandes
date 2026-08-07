import React, { useState } from 'react';
import { Wish } from '../types';
import { CheckCircle2, MessageSquare, UserCheck, Users } from 'lucide-react';

interface RsvpSectionProps {
  wishes: Wish[];
  onAddWish: (wish: Omit<Wish, 'id' | 'timestamp'>) => void;
}

export const RsvpSection: React.FC<RsvpSectionProps> = ({
  wishes,
  onAddWish,
}) => {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState<'hadir' | 'tidak_hadir' | ''>('');
  const [guestCount, setGuestCount] = useState<string>('1');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !attendance || !message.trim()) return;

    onAddWish({
      name: name.trim(),
      attendance: attendance as 'hadir' | 'tidak_hadir',
      guestCount: attendance === 'hadir' ? parseInt(guestCount, 10) || 1 : 0,
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
    <section className="bg-cream py-12 px-6 border-b border-gray-100">
      <div className="max-w-xl mx-auto text-center">
        <div className="reveal active mb-16">
          <h2 className="font-serif text-3xl md:text-4xl italic mb-4 text-charcoal">
            Terima Kasih
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed font-light">
            Merupakan suatu kehormatan bagi kami atas kehadiran Bapak/Ibu/Saudara/i.
          </p>
        </div>

        {submitted && (
          <div className="mb-8 p-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-sm text-center flex flex-col items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            <p className="font-serif italic text-lg">Konfirmasi Berhasil Terkirim</p>
            <p className="text-xs font-sans text-emerald-700">
              Matur Suksma atas doa dan konfirmasi kehadiran Anda.
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8 reveal active text-left">
          <div>
            <label className="block text-[9px] font-sans tracking-[0.2em] text-gray-500 uppercase mb-1">
              NAMA LENGKAP *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan Nama Anda"
              className="w-full bg-transparent border-0 border-b border-primary/40 py-3 font-sans text-xs tracking-[0.1em] focus:ring-0 focus:border-primary transition-colors text-charcoal placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-[9px] font-sans tracking-[0.2em] text-gray-500 uppercase mb-1">
              KONFIRMASI KEHADIRAN *
            </label>
            <select
              required
              value={attendance}
              onChange={(e) => setAttendance(e.target.value as 'hadir' | 'tidak_hadir')}
              className="w-full bg-transparent border-0 border-b border-primary/40 py-3 font-sans text-xs tracking-[0.1em] focus:ring-0 focus:border-primary transition-colors text-charcoal cursor-pointer"
            >
              <option value="" disabled className="text-gray-400">
                PILIH KONFIRMASI KEHADIRAN
              </option>
              <option value="hadir" className="text-charcoal bg-white">
                SAYA AKAN HADIR
              </option>
              <option value="tidak_hadir" className="text-charcoal bg-white">
                SAYA TIDAK BISA HADIR
              </option>
            </select>
          </div>

          {attendance === 'hadir' && (
            <div>
              <label className="block text-[9px] font-sans tracking-[0.2em] text-gray-500 uppercase mb-1">
                JUMLAH TAMU *
              </label>
              <input
                type="number"
                min="1"
                max="10"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                placeholder="JUMLAH TAMU"
                className="w-full bg-transparent border-0 border-b border-primary/40 py-3 font-sans text-xs tracking-[0.1em] focus:ring-0 focus:border-primary transition-colors text-charcoal"
              />
            </div>
          )}

          <div>
            <label className="block text-[9px] font-sans tracking-[0.2em] text-gray-500 uppercase mb-1">
              UCAPAN &amp; DOA RESTU *
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tuliskan pesan, ucapan & doa restu..."
              className="w-full bg-transparent border-0 border-b border-primary/40 py-3 font-sans text-xs tracking-[0.1em] focus:ring-0 focus:border-primary transition-colors resize-none text-charcoal placeholder:text-gray-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-5 bg-primary text-white font-sans text-[10px] tracking-[0.3em] uppercase hover:bg-charcoal transition-all duration-500 shadow-lg cursor-pointer flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            KIRIM KONFIRMASI
          </button>
        </form>

        {/* Wishes Feed */}
        <div className="mt-24 text-left">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-primary/20">
            <h3 className="font-sans text-[10px] tracking-[0.3em] text-primary uppercase font-semibold flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Ucapan Tamu ({wishes.length})
            </h3>
            <span className="text-[10px] font-sans text-gray-400">
              {wishes.filter((w) => w.attendance === 'hadir').length} Akan Hadir
            </span>
          </div>

          <div className="max-h-[420px] overflow-y-auto space-y-4 pr-1">
            {wishes.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 md:p-8 border border-gray-100 rounded-xs shadow-xs hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-serif text-charcoal font-medium text-base md:text-lg flex items-center gap-2">
                    {item.name}
                  </p>
                  <span
                    className={`text-[9px] font-sans uppercase px-2 py-0.5 rounded-full tracking-wider flex items-center gap-1 ${
                      item.attendance === 'hadir'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {item.attendance === 'hadir' ? (
                      <>
                        <UserCheck className="w-3 h-3" /> Hadir
                        {item.guestCount && item.guestCount > 1 && ` (${item.guestCount})`}
                      </>
                    ) : (
                      'Halangan'
                    )}
                  </span>
                </div>
                <p className="italic text-gray-600 leading-relaxed text-sm font-light">
                  &ldquo;{item.message}&rdquo;
                </p>
                <p className="text-[9px] font-sans text-gray-400 mt-3 text-right">
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
