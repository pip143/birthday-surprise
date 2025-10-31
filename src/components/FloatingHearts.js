import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 6 + Math.random() * 4,
        size: 1.5 + Math.random() * 1.5,
      };
      
      setHearts(prev => [...prev, newHeart]);

      // Remove heart after animation
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, newHeart.duration * 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      <AnimatePresence>
        {hearts.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ 
              opacity: 0, 
              y: '100vh', 
              x: `${heart.left}vw`,
              rotate: 0,
              scale: 0
            }}
            animate={{ 
              opacity: [0, 1, 1, 0], 
              y: '-10vh', 
              rotate: 360,
              scale: heart.size
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: heart.duration,
              delay: heart.delay,
              ease: 'easeInOut'
            }}
            className="absolute text-pink-300"
            style={{ fontSize: '2rem' }}
          >
            ❤️
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingHearts;
