import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoIntro = ({ onVideoEnd }) => {
  const videoRef = useRef(null);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Try autoplay but show button if it fails
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => {
          setShowPlayButton(false);
          setIsPlaying(true);
        })
        .catch(err => {
          console.log("Autoplay prevented, showing play button");
          setShowPlayButton(true);
        });
    }
  }, []);

  const handleVideoEnd = () => {
    setTimeout(() => {
      onVideoEnd();
    }, 500);
  };

  const handleSkip = () => {
    onVideoEnd();
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowPlayButton(false);
      setIsPlaying(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="video-container"
    >
      <video
        ref={videoRef}
        onEnded={handleVideoEnd}
        autoPlay
        playsInline
        className="max-w-full max-h-full"
      >
        <source src="/assets/video/oia.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Play Button Overlay */}
      <AnimatePresence>
        {showPlayButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={handlePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-pink-600 font-bold p-8 rounded-full shadow-2xl smooth-transition hover:scale-110 z-50"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-16 w-16" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Skip Button */}
      {isPlaying && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          onClick={handleSkip}
          className="absolute bottom-8 right-8 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 px-8 rounded-full backdrop-blur-md border border-white border-opacity-30 smooth-transition transform hover:scale-105"
        >
          Skip ⏭️
        </motion.button>
      )}
    </motion.div>
  );
};

export default VideoIntro;
