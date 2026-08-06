import { useState, useRef, useEffect } from "react";
import { BiPlay, BiPause, BiMusic } from "react-icons/bi";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setCurrentTime(audio.currentTime);
    if (audio.duration > 0) {
      setProgress((audio.currentTime / audio.duration) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setDuration(audio.duration);
  };

  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newProgress = e.target.value;
    const newTime = (newProgress / 100) * audio.duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
    setProgress(newProgress);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };
    
    if (audio) {
      audio.addEventListener("ended", handleEnded);
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    }
    return () => {
      if (audio) {
        audio.removeEventListener("ended", handleEnded);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      }
    };
  }, []);

  return (
    <div className="border border-neutral-200 dark:border-neutral-800 p-4 rounded-lg shadow-sm w-full bg-white dark:bg-neutral-800/50 flex flex-col gap-3 transition-colors duration-300">
      
      {/* Top Section: Info & Play Button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          {/* Animated Icon Container */}
          <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 flex-shrink-0 ${isPlaying ? 'bg-neutral-900 dark:bg-white text-white dark:text-black shadow-md' : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400'}`}>
            <BiMusic className={`text-lg transition-transform duration-700 ${isPlaying ? 'animate-pulse' : ''}`} />
          </div>
          
          {/* Text & Status */}
          <div className="flex flex-col gap-0.5 overflow-hidden">
            <h2 className="text-sm font-semibold font-poppins text-neutral-900 dark:text-neutral-100 tracking-wide truncate max-w-[150px] sm:max-w-[200px]">
               Alex Crichton - Merry Christmas, I miss you
            </h2>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                {isPlaying && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>}
                <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${isPlaying ? 'bg-green-500' : 'bg-neutral-300 dark:bg-neutral-600'}`}></span>
              </span>
              <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-0.5">
                {isPlaying ? "Now Playing" : "Paused"}
              </span>
            </div>
          </div>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-transparent border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer text-neutral-700 dark:text-neutral-300"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <BiPause className="text-xl" />
          ) : (
            <BiPlay className="text-xl pl-0.5" />
          )}
        </button>
      </div>

      {/* Bottom Section: Progress Bar */}
      <div className="flex items-center gap-3 w-full mt-1 px-1">
        <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 min-w-[24px]">
          {formatTime(currentTime)}
        </span>
        
        <input
          type="range"
          min="0"
          max="100"
          value={progress || 0}
          onChange={handleProgressChange}
          className="flex-grow h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-neutral-800 dark:accent-neutral-200"
        />
        
        <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 min-w-[24px] text-right">
          {formatTime(duration)}
        </span>
      </div>

      {/* Audio from public folder */}
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
