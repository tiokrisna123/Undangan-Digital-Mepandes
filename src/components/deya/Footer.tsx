import React from 'react';
import { Share2 } from 'lucide-react';

interface FooterProps {
  onOpenLinkGenerator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLinkGenerator }) => {
  return (
    <footer className="relative overflow-visible border-t border-gray-100 bg-gradient-to-b from-[#5C1A1F] via-[#542a2d] to-[#28402F] px-6 py-12 text-center">

      {/* CONTENT */}
      <div className="relative z-30 reveal active flex flex-col items-center">
        <button
          onClick={onOpenLinkGenerator}
          className="mb-8 flex cursor-pointer items-center gap-2 rounded-xs border border-ivory bg-ivory px-4 py-2 font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-primary shadow-lg transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
        >
          <Share2 className="w-3.5 h-3.5" />
          BAGIKAN UNDANGAN INI
        </button>

        <p className="mb-2 font-sans text-[8px] uppercase tracking-[0.4em] text-white/80">
          CREATED BY MAITEKA
        </p>

        <p className="font-sans text-[8px] tracking-[0.2em] text-white/60">
          © 2026 MEPANDES CEREMONY
        </p>
      </div>

    </footer>
  );
};