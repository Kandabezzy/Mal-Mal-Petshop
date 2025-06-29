
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TimelineBarProps {
  targetRating: number;
  duration?: number;
}

const TimelineBar: React.FC<TimelineBarProps> = ({ targetRating, duration = 3000 }) => {
  const [progress, setProgress] = useState(0);
  const [currentRating, setCurrentRating] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = Math.min(prev + 2, (targetRating / 5) * 100);
        setCurrentRating((newProgress / 100) * 5);
        return newProgress;
      });
    }, duration / 50);

    return () => clearInterval(interval);
  }, [targetRating, duration]);

  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-600">Rating Pelanggan</span>
        <span className="text-lg font-bold text-gradient-premium">
          {currentRating.toFixed(1)}/5.0
        </span>
      </div>
      
      <div className="relative h-3 bg-gray-200/30 rounded-full overflow-hidden glass-elegant">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-500 rounded-full timeline-progress animate-liquid-flow"
          style={{ width: `${progress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        
        {/* Liquid bubbles effect */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: '25%',
              }}
              animate={{
                x: [0, 10, -5, 15, 0],
                y: [0, -2, 1, -1, 0],
                scale: [1, 1.2, 0.8, 1.1, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="flex justify-between text-xs text-gray-500">
        <span>Sangat Buruk</span>
        <span>Buruk</span>
        <span>Cukup</span>
        <span>Baik</span>
        <span>Sangat Baik</span>
      </div>
    </div>
  );
};

export default TimelineBar;
