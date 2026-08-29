import React from 'react';
import { X } from 'lucide-react';

interface LightboxModalProps {
  src: string | null;
  alt: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  src,
  alt,
  onClose,
}) => {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/80 hover:text-white bg-black/40 hover:bg-black/80 p-3 rounded-full transition-colors cursor-pointer"
        title="Tutup"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="max-w-4xl max-h-[85vh] relative flex flex-col items-center justify-center text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[75vh] object-contain rounded-xs shadow-2xl border border-white/10"
        />
        {alt && (
          <p className="font-serif italic text-white/90 text-lg mt-4 max-w-lg">
            {alt}
          </p>
        )}
      </div>
    </div>
  );
};
