import NavLink from "../NavLink";

export default function Navigation() {
  return (
    <header>
      <nav className="fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-zinc-800 border-b  bg-zinc-900/0">
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <a href="/about" className="duration-200 tracking-tighter hover:tracking-normal hover:text-purple-400">
              About Me
            </a>
            <a href="/projects" className="duration-200 tracking-tighter hover:tracking-normal hover:text-purple-400">
              My Projects
            </a>
            <a href="/contact" className="duration-200 tracking-tighter hover:tracking-normal hover:text-purple-400">
              Let's Talk?
            </a>
          </div>
          <a href="/" className="hover:text-purple-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 ">
              <path d="m12 19-7-7 7-7"></path><path d="M19 12H5">
              </path>
            </svg>
          </a>
        </div>

      </nav>
    </header>
    
  );
}