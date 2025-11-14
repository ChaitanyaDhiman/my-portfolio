interface IntroAnimationProps {
  introComplete: boolean;
}

export default function IntroAnimation({ introComplete }: IntroAnimationProps) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out z-20 ${
        introComplete ? 'scale-50 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
      }`}
      style={{ transformOrigin: 'center center' }}
    >
      <div className="px-4 sm:px-6 md:px-8 w-full max-w-full">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-center break-words leading-tight">
          Chaitanya Dhiman
        </h1>
      </div>
    </div>
  );
}