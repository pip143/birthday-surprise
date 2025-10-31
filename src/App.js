import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import VideoIntro from './components/VideoIntro';
import MainContent from './components/MainContent';
import FloatingHearts from './components/FloatingHearts';
import Sparkles from './components/Sparkles';

function App() {
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    // Check if video has been watched before (optional)
    const hasWatchedVideo = sessionStorage.getItem('hasWatchedVideo');
    if (hasWatchedVideo) {
      setShowVideo(false);
    }
  }, []);

  const handleVideoEnd = () => {
    sessionStorage.setItem('hasWatchedVideo', 'true');
    setShowVideo(false);
  };

  const handleReplayVideo = () => {
    setShowVideo(true);
  };

  return (
    <div className="min-h-screen animated-gradient overflow-hidden">
      <AnimatePresence mode="wait">
        {showVideo ? (
          <VideoIntro key="video" onVideoEnd={handleVideoEnd} />
        ) : (
          <MainContent key="main" onReplayVideo={handleReplayVideo} />
        )}
      </AnimatePresence>
      
      {!showVideo && (
        <>
          <FloatingHearts />
          <Sparkles />
        </>
      )}
    </div>
  );
}

export default App;
