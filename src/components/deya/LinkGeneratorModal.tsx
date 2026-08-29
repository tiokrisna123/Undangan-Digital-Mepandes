import React, { useState } from 'react';
import { X, Copy, Check, Share2, Link as LinkIcon } from 'lucide-react';

interface LinkGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentGuest: string;
}

export const LinkGeneratorModal: React.FC<LinkGeneratorModalProps> = ({
  isOpen,
  onClose,
  currentGuest,
}) => {
  const [nameInput, setNameInput] = useState(currentGuest || '');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const baseUrl = window.location.origin + window.location.pathname;
  const generatedUrl = nameInput.trim()
    ? `${baseUrl}?to=${encodeURIComponent(nameInput.trim())}`
    : baseUrl;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-[110] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-md w-full p-6 md:p-8 rounded-xs shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-charcoal p-1 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2 text-primary">
          <Share2 className="w-5 h-5" />
          <h3 className="font-serif text-xl font-medium text-charcoal">
            Buat Link Undangan Tamu
          </h3>
        </div>
        <p className="text-xs text-gray-500 font-sans mb-6">
          Ketikkan nama tamu untuk membuat tautan undangan khusus dengan nama yang dituju.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-[9px] font-sans tracking-[0.2em] text-gray-400 uppercase mb-1">
              NAMA TAMU
            </label>
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="Contoh: Bapak Gede Suarsa / Ni Luh Made"
              className="w-full bg-cream border border-gray-200 p-3 font-sans text-xs focus:ring-1 focus:ring-primary focus:border-primary text-charcoal rounded-xs"
            />
          </div>

          <div>
            <label className="block text-[9px] font-sans tracking-[0.2em] text-gray-400 uppercase mb-1">
              TAUTAN UNDANGAN
            </label>
            <div className="flex items-center gap-2 bg-cream p-3 border border-gray-200 rounded-xs">
              <LinkIcon className="w-4 h-4 text-primary shrink-0" />
              <input
                type="text"
                readOnly
                value={generatedUrl}
                className="w-full bg-transparent font-sans text-xs text-gray-600 focus:outline-none overflow-ellipsis"
              />
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="w-full py-3.5 bg-primary text-white font-sans text-[10px] tracking-[0.25em] uppercase hover:bg-charcoal transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md mt-2"
          >
            {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
            {copied ? 'LINK TERSALIN!' : 'SALIN LINK UNDANGAN'}
          </button>
        </div>
      </div>
    </div>
  );
};
