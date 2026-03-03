import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-8 flex flex-col items-center"
      >
        <div className="mb-4 h-24 w-24 rounded-full border-4 border-primary/20 p-4 flex items-center justify-center">
           <span className="text-3xl font-serif font-bold text-primary italic">G</span>
        </div>
        <h1 className="text-xl font-serif italic text-primary tracking-widest">
          GARDENIA
        </h1>
        <p className="mt-2 text-sm font-light tracking-widest text-dark/60">
          Mewujudkan Taman Impian Anda
        </p>
      </motion.div>

      <div className="h-[2px] w-64 overflow-hidden rounded-full bg-gray-soft">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
