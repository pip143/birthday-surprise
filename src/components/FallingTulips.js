import React from 'react';
import { motion } from 'framer-motion';

const FallingTulips = () => {
  const tulips = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: i * 0.2,
    duration: 8 + Math.random() * 4,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {tulips.map(tulip => (
        <motion.img
          key={tulip.id}
          src="/assets/images/bt.png"
          alt="tulip"
          initial={{ 
            opacity: 0, 
            y: -100, 
            x: `${tulip.left}vw`,
            rotate: 0,
            scale: 0.8
          }}
          animate={{ 
            opacity: [0, 0.9, 0.9, 0], 
            y: '110vh',
            rotate: 360,
            scale: 1.2
          }}
          transition={{ 
            duration: tulip.duration,
            delay: tulip.delay,
            ease: 'linear'
          }}
          className="absolute w-16 h-20 drop-shadow-lg"
          style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))' }}
        />
      ))}
    </div>
  );
};

export default FallingTulips;
