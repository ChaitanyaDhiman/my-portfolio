import { motion } from 'framer-motion';

interface IntroAnimationProps {
  introComplete: boolean;
}

export default function IntroAnimation({ introComplete }: IntroAnimationProps) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center z-20 pointer-events-none`}
    >
      {!introComplete && (
        <div className="px-4 sm:px-6 md:px-8 w-full max-w-full">
          <motion.h1
            layoutId="hero-name"
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-center break-words leading-tight text-white"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Chaitanya Dhiman
          </motion.h1>
        </div>
      )}
    </div>
  );
}