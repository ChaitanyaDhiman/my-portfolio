import SocialIcon from './SocialIcon';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function SocialLinks() {
  const socials = [
    { icon: Twitter, label: 'Twitter', href: 'https://x.com/imCDhiman' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/ChaitanyaDhiman' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/chaitanya_dhiman/' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/chaitanya-dhiman-569a2b136/' },
  ];

  return (
    <div className="flex gap-4">
      {socials.map((social) => (
        <SocialIcon
          key={social.label}
          icon={social.icon}
          label={social.label}
          href={social.href}
        />
      ))}
    </div>
  );
}