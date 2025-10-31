import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MessageCard from './MessageCard';
import FallingTulips from './FallingTulips';

const messages = [
  {
    greeting: "💖 Happy birthday baby! 💖",
    text: "It's been 1 year and 9 months since we started dating.",
    emoji: "🎂"
  },
  {
    greeting: "🌟 Surprises and Ups and Downs",
    text: "Ever since then, life has been full of surprises and ups and downs, but you've always been there, pushing me on despite your own struggles.",
    emoji: "🌈"
  },
  {
    greeting: "✨ A Ray of Hope",
    text: "You've been a ray of hope and rest for me. You deserve the best for your special day.",
    emoji: "🌟"
  },
  {
    greeting: "💝 Hardworking and Understanding",
    text: "You've always been hardworking and understanding, you've treated me kindly and you're quite funny.",
    emoji: "😊"
  },
  {
    greeting: "🌹 Most Beautiful Girl",
    text: "You're the most beautiful girl in the world baby. I can't live without you.",
    emoji: "👸"
  },
  {
    greeting: "💕 I Love You!",
    text: "I love you baby, happy birthday.",
    emoji: "❤️"
  },
  {
    greeting: "🎵 A Special Message For You 🎵",
    text: "Press the button below to hear my birthday recording!",
    emoji: "🎁"
  }
];

const MainContent = ({ onReplayVideo }) => {
  const [step, setStep] = useState(0);
  const [showAudioButton, setShowAudioButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTulips, setShowTulips] = useState(false);
  
  const backgroundMusicRef = useRef(null);
  const customAudioRef = useRef(null);

  useEffect(() => {
    // Start background music immediately when component mounts (after video ends)
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.volume = 0.25;
      backgroundMusicRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, []);

  const handleNext = () => {
    if (step < messages.length - 1) {
      setStep(step + 1);
      
      // Show tulips at specific steps
      if (step === 1 || step === 3) {
        setShowTulips(true);
        setTimeout(() => setShowTulips(false), 10000);
      }
    } else {
      setShowAudioButton(true);
    }
  };

  const handlePlayAudio = async () => {
    if (customAudioRef.current && backgroundMusicRef.current) {
      setIsPlaying(true);
      
      // Fade out background music
      let volume = backgroundMusicRef.current.volume;
      const fadeOut = setInterval(() => {
        if (volume > 0.1) {
          volume -= 0.1;
          backgroundMusicRef.current.volume = volume;
        } else {
          backgroundMusicRef.current.pause();
          clearInterval(fadeOut);
        }
      }, 100);

      // Play custom audio
      customAudioRef.current.volume = 1;
      await customAudioRef.current.play();
      
      // Show tulips during audio
      setShowTulips(true);

      customAudioRef.current.onended = () => {
        setIsPlaying(false);
        setShowTulips(false);
        
        // Fade in background music
        backgroundMusicRef.current.volume = 0;
        backgroundMusicRef.current.play().catch(e => console.log("Autoplay prevented:", e));
        const fadeIn = setInterval(() => {
          if (backgroundMusicRef.current.volume < 0.25) {
            backgroundMusicRef.current.volume += 0.05;
          } else {
            clearInterval(fadeIn);
          }
        }, 100);
      };
    }
  };

  const handleReset = () => {
    setStep(0);
    setShowAudioButton(false);
    setIsPlaying(false);
    setShowTulips(false);
    
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.volume = 0.25;
      backgroundMusicRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center relative px-4 py-8"
    >
      {/* Audio Elements */}
      <audio ref={backgroundMusicRef} loop>
        <source src="/assets/audio/happy-birthday-to-you-370804.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={customAudioRef}>
        <source src="/assets/audio/recording.mp3" type="audio/mpeg" />
      </audio>

      {/* Falling Tulips */}
      <AnimatePresence>
        {showTulips && <FallingTulips />}
      </AnimatePresence>

      {/* Main Card */}
      <MessageCard
        message={messages[step]}
        step={step}
        totalSteps={messages.length}
        onNext={handleNext}
        onReset={handleReset}
        onPlayAudio={handlePlayAudio}
        onReplayVideo={onReplayVideo}
        showAudioButton={showAudioButton}
        isPlaying={isPlaying}
      />
    </motion.div>
  );
};

export default MainContent;
