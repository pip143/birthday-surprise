import React from 'react';
import { motion } from 'framer-motion';

const ProgressDots = ({ current, total }) => {
  return (
    <div className="flex gap-2 justify-center mb-8">
      {Array.from({ length: total }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          animate={{ 
            scale: index === current ? 1.3 : 1,
            backgroundColor: index === current 
              ? 'rgba(255, 255, 255, 0.9)' 
              : 'rgba(255, 255, 255, 0.3)'
          }}
          transition={{ duration: 0.3 }}
          className="w-3 h-3 rounded-full"
        />
      ))}
    </div>
  );
};

export default ProgressDots;
