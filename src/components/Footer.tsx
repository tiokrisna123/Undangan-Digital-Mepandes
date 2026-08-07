import React from 'react';
import { Share2, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenLinkGenerator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLinkGenerator,
}) => {
  return (
    <footer className="py-14 px-6 text-center bg-white border-t border-gray-100">
      <div className="reveal active flex flex-col items-center">

        {/* Tombol Bagikan */}
        <button
          onClick={onOpenLinkGenerator}
          className="mb-10 px-5 py-3 border border-primary/40 text-primary font-sans text-[9px] tracking-[0.25em] uppercase hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 rounded-sm cursor-pointer"
        >
          <Share2 className="w-4 h-4" />
          BAGIKAN UNDANGAN INI
        </button>

        {/* Watermark */}
        <p className="font-sans text-[8px] tracking-[0.45em] text-gray-400 uppercase mb-4">
          CREATED BY MAITEKA
        </p>

        {/* Instagram */}
        <div className="flex flex-col items-center gap-3 mb-6">

          <a
            href="https://instagram.com/maiteka.id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors duration-300"
          >
            <Instagram className="w-4 h-4" />
            <span className="text-[11px] tracking-[0.1em]">
              @maiteka.id
            </span>
          </a>

          <div className="flex items-center gap-5">

            <a
              href="https://instagram.com/username_kamu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-500 hover:text-primary transition-colors duration-300"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span className="text-[10px]">
                @username_kamu
              </span>
            </a>

            <a
              href="https://instagram.com/username_teman"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-500 hover:text-primary transition-colors duration-300"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span className="text-[10px]">
                @username_teman
              </span>
            </a>

          </div>
        </div>

        {/* Copyright */}
        <p className="font-sans text-[8px] tracking-[0.2em] text-gray-300">
          © 2026 MEPANDES CEREMONY
        </p>

      </div>
    </footer>
  );
};