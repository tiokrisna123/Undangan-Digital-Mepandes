import React, { useState } from "react";
import { Gift, Copy, Check } from "lucide-react";

const DigitalGiftSection: React.FC = () => {
  const [toast, setToast] = useState("");

  const copyRekening = async (rekening: string) => {
    try {
      await navigator.clipboard.writeText(rekening);

      setToast("Nomor rekening berhasil disalin");

      setTimeout(() => {
        setToast("");
      }, 2500);
    } catch {
      setToast("Gagal menyalin nomor rekening");

      setTimeout(() => {
        setToast("");
      }, 2500);
    }
  };

  return (
    <>
      {/* Toast */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 bg-green-600 text-white px-5 py-3 rounded-lg shadow-xl flex items-center gap-2 animate-pulse">
          <Check size={18} />
          {toast}
        </div>
      )}

      <section className="py-24 bg-[#faf8f5] reveal">
        <div className="max-w-2xl mx-auto px-6 text-center">

          <Gift className="w-10 h-10 mx-auto text-primary mb-6" />

          <p className="uppercase tracking-[0.4em] text-[10px] text-primary mb-2">
            Kado Digital
          </p>

          <h2 className="font-serif text-3xl mb-4">
            Mepandes Gift
          </h2>

          <p className="text-gray-500 mb-10 leading-relaxed">
            Doa restu Anda merupakan hadiah terindah bagi kami.
            <br />
            Bagi keluarga dan sahabat yang ingin mengirimkan 
            hadiah / kado secara cashless, silahkan mengirimkan melalui :
          </p>

          <div className="space-y-8">

            {/* Rekening 1 */}
            <div className="bg-white rounded-xl shadow-lg border p-8">

              <img
                src="/assets/bni.png"
                alt="BNI"
                className="w-40 h-auto mx-auto mb-5 object-contain"
              />

              <p className="text-sm text-gray-500">
                BANK BNI
              </p>

              <h3 className="text-2xl font-bold my-3 tracking-widest">
                1967249122
              </h3>

              <p className="mb-6">
                A.N IDA AYU TIRTA MAHESWARI PIDADA
              </p>

              <button
                onClick={() => copyRekening("1967249122")}
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
              >
                <Copy size={18} />
                Salin Rekening
              </button>

            </div>

            {/* Rekening 2 */}
            <div className="bg-white rounded-xl shadow-lg border p-8">

              <img
                src="/assets/bni.png"
                alt="BNI"
                className="w-40 h-auto mx-auto mb-5 object-contain"
              />

              <p className="text-sm text-gray-500">
                BANK BNI
              </p>

              <h3 className="text-2xl font-bold my-3 tracking-widest">
                1911001476
              </h3>

              <p className="mb-6">
                A.N IDA AYU PANONDRIA LAKSMIDEWI PIDADA
              </p>

              <button
                onClick={() => copyRekening("1911001476")}
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
              >
                <Copy size={18} />
                Salin Rekening
              </button>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default DigitalGiftSection;