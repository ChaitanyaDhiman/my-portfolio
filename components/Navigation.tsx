import NavLink from './NavLink';

export default function Navigation() {
  return (
    <nav className="flex justify-end items-center p-8 md:p-12">
      <div className="flex gap-8 text-sm md:text-base">
        <NavLink href="/about" label="About Me" />
        <NavLink href="/projects" label="My Projects" />
        <NavLink href="/contact" label="Let's Talk?" />
      </div>
    </nav>
  );
}