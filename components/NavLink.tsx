interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  return (
    <a
      href={href}
      className="duration-200 tracking-tighter hover:tracking-normal hover:text-purple-400"
    >
      {label}
    </a>
  );
}
