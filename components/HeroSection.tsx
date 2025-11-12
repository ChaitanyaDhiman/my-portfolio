import Avatar from './Avatar';
import SocialLinks from './SocialLinks';

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-8 text-center">
      <Avatar />

      <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
        Chaitanya Dhiman
      </h1>

      <p className="text-gray-300 max-w-2xl text-lg md:text-xl leading-relaxed mb-12">
        Hey there 👋 I'm a creative developer & designer from India. I specialize in
        building intuitive digital experiences and crafting visually stunning designs.
      </p>

      <div className="mb-4 text-gray-400 text-sm">
        Let's Connect! Find me here
      </div>
      
      <SocialLinks />
    </div>
  );
}