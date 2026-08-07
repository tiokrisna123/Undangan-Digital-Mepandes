import React from 'react';
import { Share2, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenLinkGenerator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLinkGenerator,
}) => {
  return (
    <footer className="py-16 px-6 text-center bg-[#faf7f2] border-t border-gray-200">
      <div className="max-w-md mx-auto">

        {/* Tombol Bagikan */}
        <button
          onClick={onOpenLinkGenerator}
          className="mb-12 px-6 py-3 border border-[#c8a45c] text-[#c8a45c] text-[11px] tracking-[0.3em] uppercase rounded-full hover:bg-[#c8a45c] hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          <Share2 className="w-4 h-4" />
          Bagikan Undangan
        </button>

        {/* Watermark */}
        <h3 className="text-sm tracking-[0.45em] uppercase text-[#c8a45c] font-semibold mb-2">
          MAITEKA
        </h3>

        <p className="text-xs text-gray-500 italic mb-8">
          Crafted with ❤️ by MaiTeka Studio
        </p>

        {/* Instagram */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">

          <a
            href="https://instagram.com/maiteka.id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all"
          >
            <Instagram className="w-4 h-4 text-[#c8a45c]" />
            <span className="text-sm font-medium">
              @maiteka.id
            </span>
          </a>

          <a
            href="https://instagram.com/username_kamu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all"
          >
            <Instagram className="w-4 h-4 text-[#c8a45c]" />
            <span className="text-sm">
              @username_kamu
            </span>
          </a>

          <a
            href="https://instagram.com/username_teman"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all"
          >
            <Instagram className="w-4 h-4 text-[#c8a45c]" />
            <span className="text-sm">
              @username_teman
            </span>
          </a>

        </div>

        {/* Copyright */}
        <p className="text-[11px] tracking-[0.2em] text-gray-400">
          © 2026 MEPANDES CEREMONY
        </p>

      </div>
    </footer>
  );
};