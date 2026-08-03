import React from 'react';
import { Share2 } from 'lucide-react';

interface FooterProps {
  onOpenLinkGenerator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLinkGenerator }) => {
  return (
    <footer className="py-12 px-6 text-center bg-white border-t border-gray-100 relative">
      <div className="reveal active flex flex-col items-center">
        <button
          onClick={onOpenLinkGenerator}
          className="mb-8 px-4 py-2 border border-primary/40 text-primary font-sans text-[9px] tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 rounded-xs cursor-pointer"
        >
          <Share2 className="w-3.5 h-3.5" />
          BAGIKAN UNDANGAN INI
        </button>

        <p className="font-sans text-[8px] tracking-[0.4em] text-gray-400 mb-2 uppercase">
          CREATED BY MAITEKA
        </p>
        <p className="font-sans text-[8px] tracking-[0.2em] text-gray-300">
          © 2026 MEPANDES CEREMONY
        </p>
      </div>
    </footer>
  );
};
