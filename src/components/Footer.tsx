import React from 'react';
import { Share2, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenLinkGenerator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLinkGenerator,
}) => {
  return (
    <footer className="py-16 px-6 bg-[#faf7f2] border-t border-gray-200">
      <div className="max-w-md mx-auto text-center">

        {/*
          <button
          onClick={onOpenLinkGenerator}
          className="mb-12 mx-auto flex items-center gap-2 px-6 py-3 border border-[#c8a45c] rounded-full text-[#c8a45c] text-[11px] tracking-[0.3em] uppercase hover:bg-[#c8a45c] hover:text-white transition-all duration-300"
        >
          <Share2 className="w-4 h-4" />
          Bagikan Undangan
        </button>
        */} 

        {/* Brand */}
        <h2 className="text-sm font-semibold tracking-[0.5em] uppercase text-[#c8a45c] mb-2">
          MAITEKA
        </h2>

        <p className="text-xs text-gray-500 italic mb-8">
          Designed &amp; Developed by MaiTeka.id
        </p>

        {/* Instagram utama */}
        <div className="flex justify-center mb-4">
          <a
            href="https://instagram.com/maiteka.id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300"
          >
            <Instagram className="w-4 h-4 text-[#c8a45c]" />
            <span className="text-sm font-medium text-gray-700">
              @maiteka.id
            </span>
          </a>
        </div>
        
        {/* Copyright */}
        <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400">
          © 2026 Mepandes Ceremony
        </p>

      </div>
    </footer>
  );
};