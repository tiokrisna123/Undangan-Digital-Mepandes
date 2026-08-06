import React, { useState, useEffect, useRef } from 'react';
import { Music, VolumeX, Volume2 } from 'lucide-react';

interface AudioPlayerProps {
  autoStart: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ autoStart }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // High quality traditional Balinese Gamelan ambient audio stream
  const musicUrl = "/assets/Cakra Buana - Epic Instrumental - Balinese.mp3";

  useEffect(() => {
    if (autoStart) {
      handlePlay();
    }
  }, [autoStart]);

  const handlePlay = async () => {
    if (!audioRef.current) return;
    try {
      audioRef.current.volume = 0.4;
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      console.warn('Autoplay prevented or audio unavailable:', err);
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      handlePlay();
    }
  };

  return (
    <>
      <audio ref={audioRef} src={musicUrl} loop preload="auto" />

      <button
        onClick={togglePlay}
        title={isPlaying ? 'Matikan Musik' : 'Putar Musik'}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center bg-white/90 backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${
          isPlaying ? 'animate-pulse' : 'opacity-80'
        }`}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-primary" />
        ) : (
          <VolumeX className="w-5 h-5 text-gray-500" />
        )}
      </button>
    </>
  );
};