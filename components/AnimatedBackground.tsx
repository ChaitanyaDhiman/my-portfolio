export default function AnimatedBackground() {
  return (
    <>
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 animate-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500 via-indigo-600 to-purple-700 animate-gradient-reverse mix-blend-multiply"></div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            transform: translate(0%, 0%) scale(1);
          }
          50% {
            transform: translate(10%, 10%) scale(1.1);
          }
          100% {
            transform: translate(0%, 0%) scale(1);
          }
        }

        @keyframes gradient-reverse {
          0% {
            transform: translate(0%, 0%) scale(1);
          }
          50% {
            transform: translate(-10%, -10%) scale(1.1);
          }
          100% {
            transform: translate(0%, 0%) scale(1);
          }
        }

        .animate-gradient {
          animation: gradient 15s ease infinite;
        }

        .animate-gradient-reverse {
          animation: gradient-reverse 20s ease infinite;
        }
      `}</style>
    </>
  );
}