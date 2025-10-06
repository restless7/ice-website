// components/ui/level-up-animation.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface LevelUpAnimationProps {
  isVisible: boolean;
  level: number;
  categoryName: string;  // Make sure this prop is defined in the interface
  onComplete: () => void;
}

export function LevelUpAnimation({ 
  isVisible, 
  level, 
  categoryName,
  onComplete 
}: LevelUpAnimationProps) {
  useEffect(() => {
    if (isVisible) {
      // Create and play the sound
      const audio = new Audio('/sounds/levelup.mp3');
      audio.volume = 0.7; // Adjust volume (0.0 to 1.0)
      audio.play().catch(error => {
        console.log("Audio playback failed:", error);
      });
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: 2 }} // Added duration for main container
          onAnimationComplete={onComplete}
          className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
        >
          <div className="fixed inset-0 bg-black/50" />
          <motion.div
            className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 p-8 rounded-lg shadow-xl text-center relative"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }} // Slower rise animation with delay
          >
            <motion.div
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ 
                duration: 1,
                delay: 0.4,
                type: "spring",
                stiffness: 100
              }} // Bouncy emoji animation
              className="text-6xl mb-4"
            >
              🎉
            </motion.div>
            <motion.h2
              className="text-4xl font-bold text-white mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }} // Text fade in
            >
              Level Up!
            </motion.h2>
            <motion.p
              className="text-xl text-white mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }} // Category name fade in
            >
              {categoryName}
            </motion.p>
            <motion.p
              className="text-2xl text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }} // Level number fade in
            >
              Now Level {level}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}