import React from 'react';
import { motion } from 'framer-motion';
import ProgressDots from './ProgressDots';

const MessageCard = ({
  message,
  step,
  totalSteps,
  onNext,
  onReset,
  onPlayAudio,
  onReplayVideo,
  showAudioButton,
  isPlaying
}) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        duration: 0.5 
      }}
      className="glass-card rounded-3xl p-8 md:p-16 max-w-3xl w-full text-center relative z-10"
    >
      {/* Greeting */}
      <motion.h1
        key={`greeting-${step}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="font-dancing text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-2xl"
      >
        {step === 0 ? (
          <>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="inline-block"
            >
              💝
            </motion.span>
            {' '}Surprise!{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
              className="inline-block"
            >
              💝
            </motion.span>
          </>
        ) : (
          message.greeting
        )}
      </motion.h1>

      {/* Message Text */}
      <motion.p
        key={`text-${step}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="font-poppins text-xl md:text-2xl text-white mb-10 leading-relaxed"
        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
      >
        {step === 0 ? "Click the button below to start our little journey..." : message.text}
      </motion.p>

      {/* Progress Dots */}
      <ProgressDots current={step} total={totalSteps} />

      {/* Action Buttons */}
      <div className="space-y-4 mt-8">
        {!showAudioButton ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-full shadow-2xl smooth-transition text-xl md:text-2xl relative overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
            <span className="relative z-10">
              {step === 0 ? '✨ Click Me! ✨' : `Next ${message.emoji}`}
            </span>
          </motion.button>
        ) : (
          <>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onPlayAudio}
              disabled={isPlaying}
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-4 px-12 rounded-full shadow-2xl smooth-transition text-xl md:text-2xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPlaying ? '🎵 Playing... 🎵' : '🎵 Listen to my special message! 🎵'}
            </motion.button>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onReset}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 px-10 rounded-full shadow-lg smooth-transition"
              >
                🔄 Start Over
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onReplayVideo}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 px-10 rounded-full shadow-lg smooth-transition"
              >
                🎬 Replay Video
              </motion.button>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default MessageCard;
