import React, { useState } from 'react';

export interface DigitalAccount {
  id: string;
  bank: string;
  accountNumber: string;
  accountName: string;
}

interface DigitalGiftSectionProps {
  accounts: DigitalAccount[];
}

export function DigitalGiftSection({
  accounts,
}: DigitalGiftSectionProps) {
  console.log('[DEBUG] DigitalGiftSection rendering. accounts =', accounts);

  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (
    accountNumber: string,
    accountId: string
  ) => {
    try {
      await navigator.clipboard.writeText(accountNumber);

      setCopiedId(accountId);

      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch (error) {
      console.error('Gagal menyalin nomor rekening:', error);
    }
  };

  return (
    <section
      id="digital-gift"
      className="relative overflow-hidden bg-gradient-to-b from-[#28402F] via-[#5C1A1F] to-[#28402F] px-6 py-20 text-white md:px-10 md:py-28"
    >
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -left-24 top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">
        {/* Heading */}
        <div className="text-center">
          <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Digital Gift
          </p>

          <h2 className="font-serif text-3xl text-white md:text-4xl">
            Kirim Hadiah
          </h2>

          <div className="mx-auto mt-5 h-px w-16 bg-gold/60" />

          <p className="mx-auto mt-6 max-w-xl font-sans text-sm leading-7 text-white/80 md:text-base">
            Doa dan kehadiran Anda merupakan hadiah terindah bagi kami.
            Namun apabila ingin memberikan tanda kasih, Anda dapat
            mengirimkannya melalui rekening digital berikut.
          </p>
        </div>

        {/* Account Cards */}
        <div className="mt-12 space-y-5">
          {accounts.map((account) => (
            <div
              key={account.id}
              className="rounded-2xl border border-gold/20 bg-ivory p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                {/* Bank */}
                <div>
                  <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
                    Rekening
                  </p>

                  <h3 className="mt-2 font-serif text-2xl text-primary">
                    {account.bank}
                  </h3>
                </div>

                {/* Bank Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 10h18" />
                    <path d="M5 10v8" />
                    <path d="M9 10v8" />
                    <path d="M15 10v8" />
                    <path d="M19 10v8" />
                    <path d="M2 18h20" />
                    <path d="m12 3 9 5H3l9-5Z" />
                  </svg>
                </div>
              </div>

              {/* Account Number */}
              <div className="mt-7">
                <p className="font-sans text-xs text-charcoal/50">
                  Nomor Rekening
                </p>

                <p className="mt-1 break-all font-sans text-xl font-semibold tracking-wider text-charcoal md:text-2xl">
                  {account.accountNumber}
                </p>

                <p className="mt-2 font-sans text-sm text-charcoal/70">
                  a.n. {account.accountName}
                </p>
              </div>

              {/* Copy Button */}
              <button
                type="button"
                onClick={() =>
                  handleCopy(
                    account.accountNumber,
                    account.id
                  )
                }
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-sans text-sm font-medium text-white transition-all duration-300 hover:bg-primary/90 active:scale-[0.98]"
              >
                {copiedId === account.id ? (
                  <>
                    <svg
                      
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>

                    Nomor Berhasil Disalin
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        width="13"
                        height="13"
                        x="9"
                        y="9"
                        rx="2"
                      />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>

                    Salin Nomor Rekening
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Closing message */}
        <div className="mt-10 text-center">
          <p className="font-serif text-lg italic text-white/85">
            &ldquo;Terima kasih atas doa dan tanda kasih yang diberikan.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}