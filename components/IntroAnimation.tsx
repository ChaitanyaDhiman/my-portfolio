interface IntroAnimationProps {
  introComplete: boolean;
}

export default function IntroAnimation({ introComplete }: IntroAnimationProps) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${
        introComplete ? 'scale-50 opacity-0' : 'scale-100 opacity-100'
      }`}
      style={{ transformOrigin: 'center center' }}
    >
      <h1 className="text-8xl md:text-9xl font-bold mb-6 tracking-tight">
        Chaitanya Dhiman
      </h1>
    </div>
  );
}