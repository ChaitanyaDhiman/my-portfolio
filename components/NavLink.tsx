interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 hover:text-purple-400 transition-colors"
    >
      {label}
      <span className="text-xs">↗</span>
    </a>
  );
}
