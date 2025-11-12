import { LucideIcon } from 'lucide-react';

interface SocialIconProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export default function SocialIcon({ icon: Icon, label, href }: SocialIconProps) {
  return (
    <a
      href={href}
      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
      aria-label={label}
    >
      <Icon size={20} />
    </a>
  );
}